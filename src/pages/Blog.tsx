import { BsPerson } from "react-icons/bs"
import PageLayout from "../components/PageLayout"
import { Link } from "react-router-dom"

const article: { content: string } = {
  content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa deleniti ullam id beatae minus sapiente aliquid, eum assumenda maxime nobis, ad soluta voluptates eaque! Qui, eaque. Sunt praesentium quos et sit eligendi, esse accusamus aperiam fugiat perferendis explicabo fugit modi asperiores doloremque id repudiandae exercitationem, odit numquam voluptate est veritatis? Est nostrum repellendus voluptatum quas accusamus earum aut quibusdam. Nesciunt nostrum fugit blanditiis ipsum beatae dolorum voluptatibus. Maxime natus, quaerat optio quia quas ab obcaecati magni, commodi totam ex nam. Distinctio quo rerum nobis aliquam ipsum optio! Repudiandae, ipsam iste exercitationem, officia culpa atque vel dolores accusamus similique, cumque magni.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa deleniti ullam id beatae minus sapiente aliquid, eum assumenda maxime nobis, ad soluta voluptates eaque! Qui, eaque. Sunt praesentium quos et sit eligendi, esse accusamus aperiam fugiat perferendis explicabo fugit modi asperiores doloremque id repudiandae exercitationem, odit numquam voluptate est veritatis? Est nostrum repellendus voluptatum quas accusamus earum aut quibusdam. Nesciunt nostrum fugit blanditiis ipsum beatae dolorum voluptatibus. Maxime natus, quaerat optio quia quas ab obcaecati magni, commodi totam ex nam. Distinctio quo rerum nobis aliquam ipsum optio! Repudiandae, ipsam iste exercitationem, officia culpa atque vel dolores accusamus similique, cumque magni.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa deleniti ullam id beatae minus sapiente aliquid, eum assumenda maxime nobis, ad soluta voluptates eaque! Qui, eaque. Sunt praesentium quos et sit eligendi, esse accusamus aperiam fugiat perferendis explicabo fugit modi asperiores doloremque id repudiandae exercitationem, odit numquam voluptate est veritatis? Est nostrum repellendus voluptatum quas accusamus earum aut quibusdam. Nesciunt nostrum fugit blanditiis ipsum beatae dolorum voluptatibus. Maxime natus, quaerat optio quia quas ab obcaecati magni, commodi totam ex nam. Distinctio quo rerum nobis aliquam ipsum optio! Repudiandae, ipsam iste exercitationem, officia culpa atque vel dolores accusamus similique, cumque magni."

}

const Blog = () => {
  return (
    <>
      {/* <div className="ads">
        <div id="ad" className="flex fixed top-8 left-8 z-50 flex-col justify-end">
          <div className="flex justify-between bg-white">
            <p className="p-1 text-xs text-[blue] font-poppins">Sponsored by: Coca Cola</p>
            <button className="px-2">x</button>
          </div>
          <img
            src="https://xpressprintinganddesign.com/wp-content/uploads/2017/06/Coke-Vertical-Banner-pdf.jpg"
            alt=""
            className="h-[600px] border-white"
          />
        </div>
        <div id="ad" className="flex fixed right-8 bottom-8 z-50 flex-col justify-end">
          <div className="flex justify-between bg-white">
            <p className="p-1 text-xs text-[blue] font-poppins">Sponsored by: Gilette</p>
            <button className="px-2">x</button>
          </div>
          <img
            src="https://wp.disruptiveadvertising.com/wp-content/uploads/2014/07/Screen-Shot-2014-07-29-at-5.00.32-PM.png"
            alt=""
            className="h-[320px] border-white"
          />
        </div>
        <div id="ad" className="flex fixed bottom-0 left-20 z-50 flex-col justify-end">
          <div className="flex justify-between bg-white">
            <p className="p-1 text-xs text-[blue] font-poppins">Sponsored by: Microhard</p>
            <button className="px-2">x</button>
          </div>
          <img
            src="https://www.viruspup.com/wp-content/uploads/2021/09/fake-popup-2-e1632557814512.jpg"
            alt=""
            className="h-[320px] border-white"
          />
        </div>
        <div id="ad" className="flex fixed right-10 top-12 z-50 flex-col justify-end">
          <div className="flex justify-between bg-white">
            <p className="p-1 text-xs text-[blue] font-poppins">Sponsored by: Weebs</p>
            <button className="px-2">x</button>
          </div>
          <img
            src="https://img.freepik.com/premium-vector/super-sale-banner-with-anime-style_150972-1368.jpg"
            alt=""
            className="h-[320px] border-white"
          />
        </div>
      </div> */}



      {/* <div className="grid place-items-center w-full h-64 text-center  bg-[url('https://images.unsplash.com/photo-1576502200916-3808e07386a5?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover">
        <h1 className="text-3xl font-semibold tracking-wide text-white lg:text-5xl font-poppins">How To Make a Blog Web Page</h1>
      </div> */}
      <PageLayout title="Blog">


        {/* <div id="ad" className="relative my-8 w-full h-40"> */}
        {/* <img id="ad"
          src="https://infiniteingenuity.wordpress.com/wp-content/uploads/2015/03/leaderboard.jpg"
          alt=""
          className="my-8 w-full h-full border-white"
        /> */}
        {/* </div> */}
        <div className="grid grid-cols-1 gap-8 px-8 m-auto my-12 lg:grid-cols-12">
          {/* <div className="">
            <ul className="sticky top-16 p-8 my-12 bg-catppuccinMantle">
              <p>A</p>
              <p>B</p>
              <p>C</p>
              <p>D</p>
              <p>E</p>
            </ul>
          </div> */}
          <div className="lg:col-span-8">
            <div className="px-6">
              <h1 className="text-4xl font-semibold">How To Make a Blog Web Page</h1>
              <div className="flex gap-6 mt-4 font-semibold tracking-wide uppercase">
                <div className="flex gap-2 items-center">
                  <p className="text-catppuccinSubtext0">June 3, 2024</p>
                </div>
                <div className="flex gap-2 items-center text-catppuccinSubtext0">
                  <BsPerson />
                  <p className="text-catppuccinSubtext0">Kenth Saya-ang</p>
                </div>
              </div>
            </div>
            <div className="my-8 overflow-hidden rounded-xl relative w-full pt-[56.25%]">
              <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="object-cover absolute top-0 left-0 w-full h-full" />
            </div>
            <p className="px-6 my-6 tracking-wide leading-8 font-poppins">
              {article.content}
              {article.content}
              {article.content}
              {article.content}
            </p>
          </div>
          <div className="relative space-y-8 text-sm lg:col-span-4">

            <div className="p-8 rounded-xl border border-gray-600">

              <p className="pb-6 text-2xl font-semibold">About Me</p>
              {/* <div id="ad" className="flex bottom-0 z-50 flex-col justify-end">
                <div className="flex justify-between bg-white">
                  <button className="px-2">x</button>
                </div>
                <img
                  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/tour-travel-agency-square-banner-promotion-design-template-5b312f8b7544637db786416e7619ed63_screen.jpg?ts=1644210325"
                  alt=""
                  className="h-[400px] my-6 border-white"
                />
              </div> */}
              <div className="grid place-items-center">
                <div className="overflow-hidden relative mb-6 h-36 rounded-full border-4 border-white aspect-square">
                  <img
                    src="https://avatars.githubusercontent.com/u/75114627?v=4"
                    alt=""
                    className="object-cover absolute w-full h-full rounded-md border-white"
                  />
                </div>
              </div>

              <h5 className="mb-6 text-xl font-semibold tracking-wide text-center text-blue-400">syke9p3</h5>
              <p className="leading-relaxed text-center">
                I'm Kenth Saya-ang - some description of me being a computer science student and the things that I am working on. Mainly webdev with ReactJS and TailwindCSS, UI/UX Design with Figma, and some graphic illustrations.
              </p>
            </div>
            <div className="top-10 p-8 pb-4 rounded-xl border border-gray-600 xl:sticky">
              <p className="pb-6 text-2xl font-semibold">Recent Posts</p>
              <div className="divide-y">
                <Link to="./" className="flex items-start py-4 border-gray-600">
                  <div className="relative h-16 aspect-video">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5NBWFHOtFE7KAnwV4X-d2ckblkk9HtUgo8sfhL1l7oSzZjushhp-Jqhka1LnhAi-mSYw&usqp=CAU"
                      alt=""
                      className="object-cover absolute w-full h-full rounded-md border-white"
                    />
                  </div>
                  <h2 className="px-4 font-medium tracking-wide">
                    Why should you switch to Linux in 2024
                  </h2>
                </Link>
                <Link to="./" className="flex items-start py-4 border-gray-600">
                  <div className="relative h-16 aspect-video">
                    <img
                      src="https://media.licdn.com/dms/image/D4E12AQHg37_sb8pKaA/article-cover_image-shrink_720_1280/0/1704739024503?e=2147483647&v=beta&t=E06Wk4RjbDRHIJz4JoDLaQfQk1CazWv-_wJs70se8Rg"
                      alt=""
                      className="object-cover absolute w-full h-full rounded-md border-white"
                    />
                  </div>
                  <h2 className="px-4 font-medium tracking-wide">
                    How to make modern website layouts with TailwindCSS
                  </h2>
                </Link>

                <Link to="./" className="flex items-start py-4 border-gray-600">
                  <div className="relative h-16 aspect-video">
                    <img
                      src="https://itsfoss.com/content/images/2023/10/install-vscodium-on-fedora.png"
                      alt=""
                      className="object-cover absolute w-full h-full rounded-md border-white"
                    />
                  </div>
                  <h2 className="px-4 font-medium tracking-wide">
                    VSCodium: the open-source VSCode alternative
                  </h2>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </PageLayout>
      <p>
        {article.content}
        {article.content}
        {article.content}
        {article.content}
        {article.content}
      </p>
    </>
  )
}

export default Blog