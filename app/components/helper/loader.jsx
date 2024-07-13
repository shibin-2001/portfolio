import ReactDOM from 'react-dom';

export default function Loader() {
    return <>{ReactDOM.createPortal(<div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
    <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-300"></div>
  </div>,  document.body)}</>
}