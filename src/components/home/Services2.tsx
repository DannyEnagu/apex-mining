import { Card } from "primereact/card";
import ClipText from "../ClipText";

export default function Services2() {
    return (
        <div className="containerWidth mx-auto py-32">
            <div className="mb-8 text-center">
                <h2 className="text-4xl font-bold mb-8">
                    <ClipText>
                        Our Services
                    </ClipText>
                </h2>
                <p className="text-[#A0A0A0] text-sm leading-6">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, at. Excepturi quae totam consectetur magnam numquam odio repellat quidem nemo.
                </p>
            </div>
            <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card title="Hedge Fund Solutions"className="!bg-transparent !border !border-gray-800 !rounded-2xl" pt={{title:{ className: 'font-light text-3xl' }}}>
                    <div className="flex flex-col items-center justify-center gap-6">
                        <p className="text-[#A0A0A0] font-medium text-sm leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.</p>

                        <p className="h-16 w-16 border"></p>
                    </div>
                </Card>
                <Card title="Ventures" className="!bg-transparent !border !border-gray-800 !rounded-2xl" pt={{title:{ className: 'font-light text-3xl' }}}>
                    <div className="flex flex-col items-center justify-center gap-6">
                        <p className="text-[#A0A0A0] font-medium text-sm leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.</p>

                        <p className="h-16 w-16 border"></p>
                    </div>
                </Card>
                <Card title="Capital Markets" className="!bg-transparent !border !border-gray-800 !rounded-2xl col-span-2" pt={{title:{ className: 'font-light text-3xl' }}}>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-[#A0A0A0] font-medium text-sm leading-6 md:w-[70%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.</p>

                        <p className="h-16 w-16 border"></p>
                    </div>
                </Card>
            </div>
        </div>
    );
}