import { useRouteError, Link, useNavigate } from "react-router-dom"

// library imports
import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid"

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="error">
      <h1>Có vẻ bạn gặp một số lỗi.</h1>
      <p>{error.message || error.statusText}</p>
      <div className="flex-md">
        <button
          className="btn "
          onClick={() => navigate(-1)}
        >
          <ArrowUturnLeftIcon width={20} />
          <span>Go Back</span>
        </button>
        <Link
          to="/"
          className="btn "
        >
          <HomeIcon width={20} />
          <span>Go home</span>
        </Link>
      </div>
    </div>
  )
}
export default Error