export default function FeatureCard(props) {
  const { title, description, img, imgPosition } = props;

  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between font-roboto px-6 md:px-0 gap-y-6 md:gap-y-0">
        {imgPosition === "left" && (
          <div className="md:w-1/2 order-last md:order-first">
            <img
              className="rounded-3xl object-cover"
              src={img}
              alt=""
            />
          </div>
        )}
        <div className="md:space-y-6 md:w-2/5">
          <h4 className="font-semibold text-2xl md:text-3xl text-blue-500 mb-6 md:mb-0">
            {title}
          </h4>
          <p className="font-normal text-slate-700">
            {description}
          </p>
        </div>
        {imgPosition === "right" && (
          <div className="md:w-1/2">
            <img
              className="rounded-3xl object-cover"
              src={img}
              alt=""
            />
          </div>
        )}
      </section>
    </>
  );
}