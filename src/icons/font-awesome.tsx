import React from 'react'
import { isFontAwesomeEnabled } from '../utils'
import { FontAwesomeVersion, IconsProp } from '../types'

const FontAwesome = (majorVersion: FontAwesomeVersion = 4): IconsProp | undefined => {
  switch (majorVersion) {
    case 4:
      isFontAwesomeEnabled(4)
      return {
        File: <i className="fa fa-file-o" aria-hidden="true" />,
        Image: <i className="fa fa-file-image-o" aria-hidden="true" />,
        Video: <i className="fa fa-file-video-o" aria-hidden="true" />,
        Audio: <i className="fa fa-file-audio-o" aria-hidden="true" />,
        Archive: <i className="fa fa-file-archive-o" aria-hidden="true" />,
        Word: <i className="fa fa-file-word-o" aria-hidden="true" />,
        Excel: <i className="fa fa-file-excel-o" aria-hidden="true" />,
        PowerPoint: (
          <i className="fa fa-file-powerpoint-o" aria-hidden="true" />
        ),
        Text: <i className="fa fa-file-text-o" aria-hidden="true" />,
        PDF: <i className="fa fa-file-pdf-o" aria-hidden="true" />,
        Rename: <i className="fa fa-i-cursor" aria-hidden="true" />,
        Folder: <i className="fa fa-folder-o" aria-hidden="true" />,
        FolderOpen: <i className="fa fa-folder-open-o" aria-hidden="true" />,
        Delete: <i className="fa fa-trash-o" aria-hidden="true" />,
        Loading: (
          <i className="fa fa-circle-o-notch fa-spin" aria-hidden="true" />
        ),
        Download: <i className="fa fa-download" aria-hidden="true" />,
      }
    case 5:
      isFontAwesomeEnabled(5)
      return {
        File: <i className="far fa-file" aria-hidden="true" />,
        Image: <i className="far fa-file-image" aria-hidden="true" />,
        Video: <i className="far fa-file-video" aria-hidden="true" />,
        Audio: <i className="far fa-file-audio" aria-hidden="true" />,
        Archive: <i className="far fa-file-archive" aria-hidden="true" />,
        Word: <i className="far fa-file-word" aria-hidden="true" />,
        Excel: <i className="far fa-file-excel" aria-hidden="true" />,
        PowerPoint: <i className="far fa-file-powerpoint" aria-hidden="true" />,
        Text: <i className="far fa-file-alt" aria-hidden="true" />,
        PDF: <i className="far fa-file-pdf" aria-hidden="true" />,
        Rename: <i className="fas fa-i-cursor" aria-hidden="true" />,
        Folder: <i className="far fa-folder" aria-hidden="true" />,
        FolderOpen: <i className="far fa-folder-open" aria-hidden="true" />,
        Delete: <i className="far fa-trash-alt" aria-hidden="true" />,
        Loading: (
          <i className="fas fa-circle-notch fa-spin" aria-hidden="true" />
        ),
        Download: <i className="fas fa-download" aria-hidden="true" />,
      }
    default:
      console.warn(
        `Could not find config for version ${majorVersion}`,
        'Accepted versions are: 4, 5',
        'Please make an issue in `react-object-list` to fix this.'
      )
  }
}

export { FontAwesome }
