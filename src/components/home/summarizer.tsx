import React from 'react';

const CardComponent: React.FC = () => {
  return (
    <a href="https://tldr-nice.vercel.app/" target="_blank" rel="noopener noreferrer" className="card glass w-310">
      <figure>
        <iframe
          width="675"
          height="375"
          src="https://www.youtube.com/embed/KzrC1MJ_w7A?autoplay=1&loop=1&playlist=KzrC1MJ_w7A"
          title="TL;DR Demo Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </figure>
      <div className="card-body">
        <h2 className="card-title">TL;DR: The Life Saviour</h2>
        <p>Is time short? Don&apos;t worry! Our Summarizer is here to save the day by distilling key points and important topics of each chapter. Study quickly and efficiently, helping you prepare within a short interval to ace your exams with ease!</p>
      </div>
    </a>
  );
};

export default CardComponent;
