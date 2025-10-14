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

import "./Profile.css";


interface ProfileProps {
  image: string;
  about: string[];
}

function Profile({ image, about }: ProfileProps) {
  return (
    <div className="profile">
      {/* Profile image */}
      <img src={image} alt="Profile" className="profile-img" />

      {/* Profile description */}
      {about.map((line, idx) => (
        <p key={idx} className="profile-desc">
          {line}
        </p>
      ))}
    </div>
  );
}

export default Profile;
