

export default function Home() {
  return (
    <main className="mt-20">
      <div className="max-w-3xl">
        <h2 className="text-4xl my-5">Hey! I'm Hafizur Rahman</h2>
        <p className="text-xl leading-8">
          A student building and securing web infrastructure. I've written software that is trusted by The United Nations, The Linux Foundation, Arch Linux, GNOME, Wine, FFmpeg and many others[1]. My code is used by millions of people worldwide.
          I focus on backend web development, scalable and distributed systems, DevOps, and cybersecurity, especially crafting defenses against automated threats. I enjoy leading initiatives and tackling complex technical challenges.
        </p>
      </div>
      <div className="my-5 flex gap-6">
        <a href=""><span>Github</span></a>
        <a href=""><span>LinkedIn</span></a>
        <a href=""><span>Facebook</span></a>
      </div>
      <div>
        tor commpany
      </div>
      <div className="flex justify-between items-center my-4">
        <h1 className="text-4xl">Featured Projects</h1>
        <p>view all</p>
      </div>
      <div className="flex gap-5">
        <div className="border p-50 w-full">
          project 1
        </div>
        <div className="border p-50 w-full">
          project 2
        </div>
      </div>
    </main>
  );
}
