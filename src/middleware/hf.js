import axios from "axios"
const stage = 'https://uddo1udjej.execute-api.us-east-1.amazonaws.com/TroopTechiesBETA';


const helper = {
    signIn: async (obj) => {
        const result = await axios.post(`${stage}/sign-in`, obj);
        const finalResult = result.data;
        console.log(finalResult);
        if(finalResult.statusCode !== 200){
            return false;
        } else {
            return true;
        }
    },
    signUp: async (obj) => {
        const result = await axios.post(`${stage}/sign-up`, obj);
        const finalResult = result.data;
        if(finalResult.statusCode !== 200){
            return false;
        } else {
            return true;
        }
    }
}

export default helper;