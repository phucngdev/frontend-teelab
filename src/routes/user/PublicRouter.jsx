import React, { useEffect, useLayoutEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../layouts/user/Header";
import Footer from "../../layouts/user/Footer";
import { useCookie } from "../../hooks/useCookie";
import MessageButton from "../../components/user/message/MessageButton";
import { useDispatch } from "react-redux";
import { getAllProduct } from "../../services/product.service";
import { getAllCategory } from "../../services/category.service";
import { getCart } from "../../services/cart.service";
import Pending from "../../components/user/animation/Pending";
import Cookies from "js-cookie";

const PublicRouter = () => {
  const dispatch = useDispatch();
  const userCookie = useCookie("user_info", false);

  const [user, setUser] = useState(userCookie || null);

  useEffect(() => {
    if (userCookie) {
      setUser(userCookie);
    }
  }, [userCookie]);

  const fetchData = async () => {
    const promises = [
      dispatch(getAllProduct({ page: 0, limit: 0 })),
      dispatch(getAllCategory()),
    ];
    await Promise.allSettled(promises);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchCart = async (user) => {
    await dispatch(getCart({ id: user.user_id }));
  };

  useEffect(() => {
    if (user) {
      fetchCart(user);
    }
  }, [user]);

  return (
    <>
      <Header user={user} setUser={setUser} />
      <Outlet context={user} />
      {user && <MessageButton user={user} />}
      <Footer />
    </>
  );
};

export default PublicRouter;
