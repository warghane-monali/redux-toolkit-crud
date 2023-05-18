import axios from "axios";
import { pool } from "../../config/pool";
import axiom from "../../config/axiom";

export const registerUserData = (payload) => axiom.post(pool.base_url + pool.paths.registerUser.path,payload)
console.log("registerUserData",pool.base_url + pool.paths.registerUser.path)

export const getUserData = () => axiom.get(pool.base_url + pool.paths.getUserDetails.path)
