import Image from "next/image";
import Link from "next/link";

const UserCard = (props) => {
    return (
        <>
            <div className="rounded-3xl border-4 border-amber-500 bg-orange-50 p-7">
                <Image
                    className="h-52 w-64 object-cover mx-auto"
                    src={props.image}
                    alt={props.text}
                    width={100}
                    height={100}
                />
                <h3 className="font-bold text-3xl my-8">{props.text}</h3>
                <Link
                    className="bg-orange-500 hover:bg-orange-600 text-white text-2xl font-bold py-3 px-6 rounded-full"
                    href={props.href}
                >
                    Ingresar
                </Link>
            </div>
        </>
    )
}

export default UserCard;