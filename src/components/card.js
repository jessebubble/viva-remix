export default function Card() {
    return (

        <main className="relative bg-slate-50 px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3"></div>
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"><span className='text-indigo-500'>VIVA</span> Community</h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              We've been fortunate enough to gain the support from our local community. Here are some projects we've built for clients in San Antonio using modern web design, development and animation
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img 
                  className="h-60 w-full object-cover" 
                  src="alamo.png" 
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href="https://www.alamowelding.com/" className="hover:underline">Link</a>
                  </p>
                  <a href="https://www.alamowelding.com/" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">Alamo Welding</p>
                    <p className="mt-3 text-base text-gray-500">
                      From custom fabrication to welding repairs, Alamo Welding has you covered. They specialize in custom fabrication and welding repairs for the San Antonio community.
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img 
                  className="h-60 w-full object-cover" 
                  src="./vivawreaths.png" 
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href="https://www.vivawreaths.com/" className="hover:underline">Link</a>
                  </p>
                  <a href="/" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">Viva Wreaths</p>
                    <p className="mt-3 text-base text-gray-500">
                      Viva Wreaths are a fun, unique and beautiful way to decorate your home or business. Made locally in San Antonio, we offer a variety of wreaths to suit your mood, style and love for the community.
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img 
                  className="h-60 w-full object-cover" 
                  src="./vivaportraits.png" 
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href="https://www.vivaportraits.com/" className="hover:underline">Link</a>
                  </p>
                  <a href="/" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">Viva Portraits</p>
                    <p className="mt-3 text-base text-gray-500">
                      Team of local creatives who are passionate about capturing your moments and bringing them to life. Join Viva Portraits for their monthly themed events: Studio Days | City Days
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img 
                  className="h-60 w-full object-cover" 
                  src="./yung.png" 
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href="https://www.yungguardian.com/" className="hover:underline">Link</a>
                  </p>
                  <a href="https://www.yungguardian.com/" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">Yung Guardian</p>
                    <p className="mt-3 text-base text-gray-500">
                      Local music group currently working on their debut album set for release early 2023. Website will launch with an e-commerce store for clothing and accessories. 
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img 
                  className="h-60 w-full object-cover" 
                  src="./bl.png" 
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href="/future" className="hover:underline">Link</a>
                  </p>
                  <a href="/future" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">Buruato Landscaping</p>
                    <p className="mt-3 text-base text-gray-500">
                      Mr. B is a local San Antonio landscaper who specializes in lawn care, tree trimming, and more. He's been in the business for over 10 years and has a passion for helping his community.
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img 
                  className="h-60 w-full object-cover" 
                  src="./ponce.png" 
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href="/future" className="hover:underline">Link</a>
                  </p>
                  <a href="/future" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">Ponce Remodeling</p>
                    <p className="mt-3 text-base text-gray-500">
                      Ponce Remodeling specializes in interior and exterior remodeling. Commercial and Residential services are available to the San Antonio community.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}