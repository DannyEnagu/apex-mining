import { Card } from "primereact/card";
import ClipText from "../ClipText";
import ApexButton from "../ui/Button";

export default function Trusted() {
    return (
        <div className="containerWidth mx-auto py-32">
            <div className="mb-16">
                <h2 className="text-center md:text-left text-4xl font-bold mb-8">
                    <ClipText>
                        Trusted Today and <br />
                    </ClipText>
                    <div className="md:flex gap-8 mt-4">
                        <ClipText>
                            Tomorrow
                        </ClipText>
                        <div className="flex flex-col gap-8 text-[#A0A0A0] text-sm leading-6">
                            <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, at. Excepturi quae totam consectetur magnam numquam odio repellat quidem nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iure illum itaque corrupti sit ut expedita ipsum, qui autem nam, ipsa, ab voluptatibus magnam consequuntur nulla non repellat quae. Mollitia.
                            </p>
                            <p>
                                <ApexButton
                                    label="More on Capital Markets"
                                    iconClass="text-gray-800 border-transparent bg-white"
                                />
                            </p>
                        </div>
                    </div>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <Card
                    title="Seamless Support"
                    className="card-glassmorphism !rounded-xl"
                    pt={{title:{ className: 'text-xl font-medium' }}}
                >
                    <div className="flex flex-col gap-3">
                        <p className="h-16 w-full border"></p>
                        <p className="font-semibold text-lg">01/03</p>
                        <p className="text-[#A0A0A0] font-light text-sm leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.</p>
                    </div>
                </Card>
                <Card
                    title="Liquidity Delivered"
                    className="card-glassmorphism !rounded-xl"
                    pt={{title:{ className: 'text-xl font-medium' }}}
                >
                    <div className="flex flex-col gap-3">
                        <p className="h-16 w-full border"></p>
                        <p className="font-semibold text-lg">02/03</p>
                        <p className="text-[#A0A0A0] font-light text-sm leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.</p>
                    </div>
                </Card>
                <Card
                    title="One-time Investment"
                    className="card-glassmorphism !rounded-xl"
                    pt={{title:{ className: 'text-xl font-medium' }}}
                >
                    <div className="flex flex-col gap-3">
                        <p className="h-16 w-full border"></p>
                        <p className="font-semibold text-lg">03/03</p>
                        <p className="text-[#A0A0A0] font-light text-sm leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.</p>
                    </div>
                </Card>
            </div>
        </div>
    );
}