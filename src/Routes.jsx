import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Wishlist = React.lazy(() => import("pages/Wishlist"));
const MyBooks = React.lazy(() => import("pages/MyBooks"));
const BookDetails = React.lazy(() => import("pages/BookDetails"));
const SearchPage = React.lazy(() => import("pages/SearchPage"));
const HomePage = React.lazy(() => import("pages/HomePage"));
const SignUpPage = React.lazy(() => import("pages/SignUpPage"));
const SignIn = React.lazy(() => import("pages/SignIn"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signuppage" element={<SignUpPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path="/bookdetails" element={<BookDetails />} />
          <Route path="/mybooks" element={<MyBooks />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
