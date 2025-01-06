import { Schema, model, Types, type Document } from 'mongoose';

interface reactions extends Document {
    reactionId: Schema.Types.ObjectId,
    reactionBody: string,
    username: string,
}

interface thoughts extends Document {
    thoughtText: string,
    username: string,
    reactions: reactions[],
}

const reactionSchema = new Schema<reactions>(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        timestamps: true,
        id: false
    },
)

const thoughtSchema = new Schema<thoughts>(
    {
        thoughtText: {
            type: String,
            required: true,
        },
        username: {
            type: String,
        },
        reactions: {
            type: [
                reactionSchema,
            ],
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        timestamps: true,
        id: false
    },
);

const thoughts = model<thoughts>('Thoughts', thoughtSchema);

export default thoughts;
