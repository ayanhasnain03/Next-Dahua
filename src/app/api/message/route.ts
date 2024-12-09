import connectDB from "@/app/lib/db";
import Message from "@/app/lib/models/message.scehma";


export async function POST(request: Request) {
    const data = await request.json();
    const { name, email, phone, message } = data;

    await connectDB();

    try {
        const messageData = await Message.create({ name, email, phone, message });
        return new Response(JSON.stringify(messageData), { status: 200 });
    } catch (error: any) {
        console.error(error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

export async function GET() {
    await connectDB();
    const messages = await Message.find({}).sort({ createdAt: -1 });
    return new Response(JSON.stringify(messages), { status: 200 });
}


export async function DELETE(request: Request) {
    const { id } = await request.json();

    if (!id) {
        return new Response(JSON.stringify({ error: "Message ID is required" }), { status: 400 });
    }

    await connectDB();
    try {
        const message = await Message.findByIdAndDelete(id);
        if (!message) {
            return new Response(JSON.stringify({ error: "Message not found" }), { status: 404 });
        }
        return new Response(JSON.stringify(message), { status: 200 });
    } catch (error: any) {
        console.error(error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
