import { motion } from "motion/react";
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  gallery,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-2xl max-h-[90vh] overflow-y-auto border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-6 h-6" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">{subDesc}</p>
          ))}
          {gallery && gallery.length > 0 && (
            <div className="mt-5">
              <p className="mb-3 text-sm font-medium text-white">Screenshots</p>
              <div className="flex gap-3 pb-2 overflow-x-auto snap-x">
                {gallery.map((shot) => (
                  <figure key={shot.src} className={`shrink-0 snap-start ${shot.phone ? "w-40" : "w-80"}`}>
                    <a href={shot.src} target="_blank" rel="noreferrer">
                      <img src={shot.src} alt={shot.caption} loading="lazy" className="w-full border rounded-lg border-white/10" />
                    </a>
                    <figcaption className="mt-1 text-xs text-neutral-400">{shot.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
            <a className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation">
              {" "}
              
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
