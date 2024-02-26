const Receipe =require('./models/ReceipeScehem')

const resolvers={
    Query:{
        async receipe(_,args){
            return await Receipe.findById(args.id)
        },
        async getReceipes(_,args){
            return await Receipe.find().sort({createdAt:-1}).limit(args.amount)
        }
    },
   
    Mutation:{
        async createReceipe(_,args){

            console.log("args",args)
            const create=await Receipe.create({
                name:args.receipeInput.name,
                description:args.receipeInput.description,
                createdAt:new Date().toISOString(),
                thumbsUp:0,
                thumbsDown:0
            })

            console.log("createReceipe",create._id.toString())

            return{
            
                ...create._doc
            }
        },

        async deleteReceipe(_,args){
            console.log("deleteargs",args)

            const rece=await Receipe.findById(args.ID)
            if(rece){
                const deletes=await Receipe.findByIdAndDelete(args.ID);
                return 1
            }else{
                return 0;
            }
        },

        async editReceipe(_,args){
            console.log("from updates",args)

            const rece=await Receipe.findById(args.ID)
            if (rece) {
                const updates = await Receipe.findByIdAndUpdate(args.ID, {$set: {...args.receipeInput}}, {new: true});
                
                return 1; 
            }else{
                return 0;
            }
        }
    }
}

module.exports=resolvers;
