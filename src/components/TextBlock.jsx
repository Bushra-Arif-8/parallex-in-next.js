'use client';

import React from 'react';
import '../app/globals.css';

const TextBlock = () => {
  return (
    <div id="textblock">
      <div id="textblock-container">
        <h1 id="textblock-title">What is Firewatch?</h1>
        <p id="textblock-content">
          The year is 1989.<br /><br />
          You are a man named Harry who has retreated from your messy life to work as a fire lookout in the Wyoming wilderness. Perched atop a mountain, it&apos;s your job to find smoke and keep the wilderness safe.<br /><br />
          An especially hot, dry summer has everyone on edge. Your supervisor, a woman named Delilah, is available to you at all times over a small, handheld radio—and is your only contact with the world you&apos;ve left behind.<br /><br />
          But when something strange draws you out of your lookout tower and into the world below, you&apos;ll explore a wild and unknown environment, facing questions and making interpersonal choices that can build or destroy the only meaningful relationship you have.
        </p>
      </div>
      <footer id="textblock-footer">
        Demo Created With 🧡 By&nbsp;<a id="textblock-devsense" href="https://youtube.com/c/DevSense19">DevSense</a>
      </footer>
    </div>
  );
};

export default TextBlock;
