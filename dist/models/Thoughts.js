import { Schema, model, Types } from 'mongoose';
const reactionSchema = new Schema({
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
}, {
    toJSON: {
        virtuals: true,
    },
    timestamps: true,
    id: false
});
const thoughtSchema = new Schema({
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
}, {
    toJSON: {
        virtuals: true,
    },
    timestamps: true,
    id: false
});
const thoughts = model('Thoughts', thoughtSchema);
export default thoughts;
