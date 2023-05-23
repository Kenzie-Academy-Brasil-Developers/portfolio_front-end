export function Hero({ imgSrc }) {
  return (
    <div className="hero min-h-screen lg:w-2/3 w-5/6 mx-auto pt-20 lg:pt-0">
      <div className="hero-content flex flex-col gap-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <img src={imgSrc} className="lg:col-start-2" />
          <div className="flex flex-col gap-3 lg:row-start-1">
            <span className="text-primary">Marcelino Gutiérrez</span>
            <h1 className="text-5xl font-bold">Welcome to my portfolio</h1>
            <p className="py-4">
              Bridging languages through code, crafting captivating web
              experiences while leveling up in the world of front-end
              development.
            </p>
            <button className="btn btn-primary btn-sm rounded-xl px-8 w-fit text-white">
              Learn more
            </button>
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-1 lg:grid-cols-7 lg:gap-10 gap-3">
          <h2 className="text-5xl font-bold lg:col-span-2">About me</h2>
          <p className="lg:col-span-5 py-4 lg:py-0">
            Hi! I'm Marcelino Gutierrez, a web developer based in Brazil. I've
            been learning web development since December of 2022, recently
            enrolled in a bootcamp in February 2023 and have made significant
            progress in a short amount of time. I've gained a solid
            understanding of HTML, CSS, JavaScript, and frameworks like React,
            Tailwind CSS and component libraries. As a highly motivated and
            disciplined individual, I'm excited to continue expanding my skills
            and knowledge in web development.
          </p>
        </div>
      </div>
    </div>
  );
}