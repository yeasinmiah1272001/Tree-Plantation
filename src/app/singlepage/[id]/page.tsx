import Container from "@/components/Container";
import { treeBlog } from "@/constant";
import { TreeBlogItem } from "../../../../type";
import SinglePageContent from "@/components/SinglePageContent";

const SinglePage = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params;

  // Find the specific item based on ID
  const singleData: TreeBlogItem | undefined = treeBlog.find(
    (item) => item.id == id
  );

  return (
    <Container className="lg:mt-40 mt-16">
      <SinglePageContent singleData={singleData as TreeBlogItem} />
    </Container>
  );
};

export default SinglePage;
