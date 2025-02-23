import { myAxios } from "./helper";
export const SignUp =async(admin) => {
    return myAxios.post("/admin/add", admin, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};


export const SignIn = async (admin) => {
  try {
      const response = await myAxios.post("/admin/login", admin, {
          headers: {
              'Content-Type': 'application/json',
          },
          withCredentials: true // Ensure that the session cookie is sent with the request
      });
      return response;
  } catch (error) {
      console.error("Error during sign-in:", error);
      throw error;  // You can handle or rethrow the error as needed
  }
};

export const AddPatient=async (patient)=>{
      return myAxios.post("/patient/add",patient,{
        headers:{
            'Content-Type':'application/json',
        },
        withCredentials: true
      });
}
export const AddIpdRecord = async (ipd) => {
  try {
      return await myAxios.post("/ipd/add", ipd, {
          headers: {
              'Content-Type': 'application/json',
          },
          withCredentials: true,
      });
  } catch (error) {
      console.error("Error adding IPD record:", error.response || error.message);
      throw error;
  }
};

export const AddOpdRecord=async (opd)=>{
    return myAxios.post("/opd/add",opd,{
        headers:{
            'Content-Type':'application/json',
        },
        withCredentials: true,
    })
}

export const AddItemRecord=async(item)=>{
    return myAxios.post("/item/add",item,{
        headers:{
            'Content-Type':'application/json',
        },
        withCredentials: true,
    })
}

export const AddConsumedItemRecord=async(item)=>{
  return myAxios.post("/consumedItems/add",item,{
      headers:{
          'Content-Type':'application/json',
      },
      withCredentials: true,
  })
}
export const getAllItems = async () => {
    return myAxios.get("/item/all", {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  export const getAllConsumedItems = async () => {
    return myAxios.get("/consumedItems/all", {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  export const getAllPatient= async () => {
    return myAxios.get("/patient/all", {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  export const getAllIpd= async () => {
    return myAxios.get("/ipd/all", {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  export const getAllOpd= async () => {
    return myAxios.get("/opd/all", {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  // export const getData = async (endpoint) => {
  //   try {
  //     const response = await api.get(endpoint);
  //     return response.data; // Return the data part of the response
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     throw error; // Throw the error to handle it in the calling function
  //   }
  // };