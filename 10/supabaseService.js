//import supabase from "./dbconfig.js";  

const { supabase } = require('./dbconfig.js');

//const { supabase } = require("./configs/dbConfig.js");

const getModel = async id => { 
    try { 
        const {data, error} = await supabase 
            .from('Models') 
            .select() 
            .match({id}); 
            
        if (error) throw error
        return data 
    } catch (e) { 
        throw e 
    }
}

const addModel = async model => {
    try {
        const {data, error} = await supabase
            .from('Models')
            .insert(model)

        if (error) throw error
        return data
    } catch (e) {
        console.warn(e);

        return null;
    }
}

module.exports = { addModel };
/*
export default {
    getModel,
    //addModel,
}*/