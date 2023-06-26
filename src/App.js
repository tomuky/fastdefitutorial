import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Welcome from './topics/welcome';
import TopicPage from './pages/TopicPage';

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <RootLayout/>,
    // errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <Welcome/> },
      { path: ':topic', element: <TopicPage/>}
    ]
  }
])

const App = () => {
  return <RouterProvider router={router}/>;
}

export default App;
