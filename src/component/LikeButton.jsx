import './LikeButton.css'
import { useState } from "react";

function LikeButton() {
  const [like, setLike] = useState(0);

  return (
    <div>
      <button onClick={() => setLike(like + 1)}>
        <i class="fa-solid fa-thumbs-up"></i>
      </button>

      <h3>Total Like: {like}</h3>
    </div>
  );
}

export default LikeButton;
