import axios from "@lib/axios";
import Order from "@models/order.model";
import apiList from "./apiList";
// CUSTOM DATA MODEL
import { IDParams } from "interfaces";

const getOrders = async (): Promise<Order[]> => {
  const response = await axios.get("/api/users/orders");
  return response.data;
};

const getIds = async (): Promise<IDParams[]> => {
  const response = await axios.get("/api/users/order-ids");
  return response.data;
};

const getOrder = async (id: string): Promise<Order> => {
  const response = await axios.get(apiList.TRACK_ORDER, { params: { id } });
  return response.data;
};

export default { getOrders, getOrder, getIds };
