import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { TreeBlogItem } from "../../../../type";

export const POST = async (request: NextRequest) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  try {
    const reqBody = await request.json();
    const { email, item } = reqBody;
    console.log(reqBody);

    // Map over items and ensure images is an array of strings (URLs)
    const extractingItems = item.map((items: TreeBlogItem) => ({
      quantity: items.quantity,
      price_data: {
        currency: "usd",
        unit_amount: Math.round(items.price * 100),
        product_data: {
          name: items.title,
          description: items.description,
          images: items.images.map((image: { url: string }) => image.url), // Access 'url' instead of 'src'
        },
      },
    }));

    console.log("exi", extractingItems);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: extractingItems,
      mode: "payment",
      success_url: `${process.env.NEXTAUTH_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL}/cancel`,
      metadata: {
        email,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "server connected",
        id: session.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("err", error);
    return NextResponse.json({
      message: "unavailable",
      success: false,
    });
  }
};
