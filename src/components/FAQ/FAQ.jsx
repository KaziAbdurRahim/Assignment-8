import { useEffect } from "react";

const FAQ = () => {

    useEffect(() => {
        document.title = "FAQ | Gadget Heaven";
    }, []);

    return (
        <div>
            <div className="bg-violet-500 p-10 text-white space-y-3">
                <h1 className="text-center break-inside-avoid-column font-bold text-2xl">Frequently asked questions</h1>
                <p className="text-center break-inside-avoid-column font-semibold text-sm">All your quires are here, if you cannot find what you are looking for please leave a massage.</p>
            </div>
            <div className="container mx-auto  mt-3">
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">Is there a refund for damaged items?</div>
                    <div className="collapse-content">
                        <p>Yes!!</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Is it shipped to BD?</div>
                    <div className="collapse-content">
                        <p>YEss!!</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">International delivary time?</div>
                    <div className="collapse-content">
                        <p>5 working days.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;