/*
 * Copyright (C) 2025 Adheesh Trivedi <adheeshtrivedi@gmail.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 */

import Profile from "./Profile";
import Socials from "./Socials";
import CategoryList from "../components/CategoryList";
import PageLayout from "../components/PageLayout";
import homeData from "../assets/home.json";
import profileImg from "../assets/me.webp";

function Home() {
  return (
    <PageLayout title="Welcome" subtitle={`Hi! I'm ${homeData.name}`}>
      <Profile image={profileImg} about={homeData.about} />
      <div className="categories-section">
        {homeData["categories"].map((cat, idx) => (
          <CategoryList key={idx} category={cat.category} items={cat.items} />
        ))}
      </div>
      {homeData.pubkey && (
        <>
          <h2>Public Keys</h2>
          {homeData.pubkey.map((key, idx) => (
            <div key={idx}>
              {key.keyname}:&nbsp;
              <a href={key.url} className="link" target="_blank" rel="noopener noreferrer">
                {key.fingerprint}
              </a>
            </div>
          ))}
        </>
      )}
      <Socials socials={homeData.socials} resumeUrl={homeData.resume} />
    </PageLayout >
  );
}

export default Home;
