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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub, faDropbox, faLinkedin, faXTwitter
} from '@fortawesome/free-brands-svg-icons';
import {
  faChalkboard, faFile, faBook, faLink, faBuildingColumns, faUser, faEnvelope
} from '@fortawesome/free-solid-svg-icons';


export const iconComponents = {
  IconGithub: () => <FontAwesomeIcon icon={faGithub} />,
  IconDropbox: () => <FontAwesomeIcon icon={faDropbox} />,
  IconLinkedin: () => <FontAwesomeIcon icon={faLinkedin} />,
  IconXTwitter: () => <FontAwesomeIcon icon={faXTwitter} />,
  IconChalkboard: () => <FontAwesomeIcon icon={faChalkboard} />,
  IconEnvelope: () => <FontAwesomeIcon icon={faEnvelope} />,
  IconFile: () => <FontAwesomeIcon icon={faFile} />,
  IconBook: () => <FontAwesomeIcon icon={faBook} />,
  IconLink: () => <FontAwesomeIcon icon={faLink} />,
  IconInstitute: () => <FontAwesomeIcon icon={faBuildingColumns} />,
  IconUser: () => <FontAwesomeIcon icon={faUser} />,
}