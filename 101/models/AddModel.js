const { supabase } = require('../configs/connection.js');

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