import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts, loading }) {
  return (
    <>
      {loading ? (
        <div className="posts">
          <div className="spinner-border loading" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="posts">
          {posts.data.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      )}
    </>
  );
}
