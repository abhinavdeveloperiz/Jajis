import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import ProtectedRoute from "./components/ProtectedRoute";  



// Lazy Loaded Pages
const Home = lazy(() => import("./pages/Home"));
const Salons = lazy(() => import("./pages/Salons"));
const SalonDetails = lazy(() => import("./pages/salon_details"));
const Cosmetics = lazy(() => import("./pages/Cosmetics"));
const EventHall = lazy(() => import("./pages/EventHall"));
const FoodCourt = lazy(() => import("./pages/FoodCourt"));
const DesigningStitching = lazy(() => import("./pages/DesigningStitching"));
const Academy = lazy(() => import("./pages/Academy"));
const Franchise = lazy(() => import("./pages/Franchise"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Contact = lazy(() => import("./pages/Contact"));

// Auth Pages
const Login = lazy(() => import("./pages/E-Login"));
const Register = lazy(() => import("./pages/E-Register"));
const ForgotPassword = lazy(() => import("./pages/E-forgot-password"));

// E-commerce
const Product = lazy(() => import("./pages/E-product_list"));
const Product_details = lazy(() => import("./pages/E-product_details"));
const Cart = lazy(() => import("./pages/E-cart"));
const WishList = lazy(() => import("./pages/E-wishlist"));
const MyOrders = lazy(() => import("./pages/E-myorders"));
const UserProfile = lazy(() => import("./pages/E-user_profile"));

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <Suspense
        fallback={
          <div className="w-full py-20 text-center text-lg font-semibold">
            Loading...
          </div>
        }
      >
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>

              {/* Main Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/salons" element={<Salons />} />
              <Route path="/salons/:id" element={<SalonDetails />} />
              <Route path="/cosmetics" element={<Cosmetics />} />
              <Route path="/event-hall" element={<EventHall />} />
              <Route path="/food-court" element={<FoodCourt />} />
              <Route path="/designing-stitching" element={<DesigningStitching />} />
              <Route path="/academy" element={<Academy />} />
              <Route path="/franchise" element={<Franchise />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />

              {/* Auth */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />

              {/* E-Commerce */}
              <Route path="/products" element={<Product />}/>
              <Route path="/product/:id" element={<ProtectedRoute><Product_details /></ProtectedRoute>} />
              <Route path="/cart" element={<ProtectedRoute> <Cart /> </ProtectedRoute>}/>
              <Route path="/myorders" element={<ProtectedRoute> <MyOrders/> </ProtectedRoute>} />
              <Route path="/wishlist" element={<ProtectedRoute> <WishList/> </ProtectedRoute> } />
              <Route path="/profile" element={<ProtectedRoute> <UserProfile/> </ProtectedRoute>} />

            </Routes>
          </main>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}
