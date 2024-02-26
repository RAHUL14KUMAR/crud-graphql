
const typedefs=`#graphql
    type Receipe{
        name:String!,
        description:String!,
        createdAt:String,
        thumbsUp:Int,
        thumbsDown:Int
    }

    input ReceipeInput{
        name:String!
        description:String!
    }

    type Query{
        receipe(ID:ID!):Receipe!
        getReceipes(amount:Int):[Receipe!]!
    }

    type Mutation{
        createReceipe(receipeInput:ReceipeInput):Receipe!
        deleteReceipe(ID:ID!):Boolean
        editReceipe(ID:ID!,receipeInput:ReceipeInput):Boolean!
    }
`
module.exports=typedefs