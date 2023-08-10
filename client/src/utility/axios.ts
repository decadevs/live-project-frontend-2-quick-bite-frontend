import axios from "axios"

const baseUrl = "htpp://localhost 4500"
export const apiGet = (path:string)=>{
const config ={
    headers:{
        Authorization : `Bearer ${localStorage.getItem("signature")} `
    }
};
return axios.get(`${baseUrl}${path}`, config)
}

export const apiPut = (path:string, data:string)=>{
    const config ={
        headers:{
            Authorization : `Bearer ${localStorage.getItem("signature")} `,
            "Content-Type": "multipart/form-data",
        }
    };
    return axios.put(`${baseUrl}${path}`,JSON.stringify(data), config)
    }






