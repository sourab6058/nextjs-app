import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <Link className="unstyled" href={`/recipe/${post.slug}`}>
      <div className="postCard">
        <h3>{post.title}</h3>
        <p>{post.bio}</p>
        <div className="statsContainer">
          <div>
            <h3>Prep Time</h3>
            <p>{post.prep_time}</p>
          </div>
          <div>
            <h3>Cook Time</h3>
            <p>{post.cook_time}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
