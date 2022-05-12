var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engine-drive-1",
      "name": "Along Engine Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.21250782002720214,
        "pitch": -0.21303340928489867,
        "fov": 1.1989879464110744
      },
      "linkHotspots": [
        {
          "yaw": -0.17978403506104357,
          "pitch": -0.23072845780574625,
          "rotation": 13.351768777756625,
          "target": "1-engine-auditorium"
        },
        {
          "yaw": 0.950021344700037,
          "pitch": -0.16936226888350703,
          "rotation": 0,
          "target": "2-engine-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.29273755564222625,
          "pitch": -0.16262496074404886,
          "title": "Welcome to home of Engineers!&nbsp;",
          "text": "Text"
        },
        {
          "yaw": 1.5711626006760238,
          "pitch": 0.03212588838193575,
          "title": "what does the sign say?",
          "text": "U-turn!"
        },
        {
          "yaw": 2.8303914865873185,
          "pitch": -0.10672822231748746,
          "title": "what does the sign say?",
          "text": "Turn Left...<div>(but the pano is going right)</div>"
        },
        {
          "yaw": 1.214021529706347,
          "pitch": -0.23318198420301606,
          "title": "Tree",
          "text": "This is a tree<div><br></div><div>it has leaves</div><div><br></div><div>it has branches</div><div><br></div><div>it has roots.</div><div><br></div>"
        }
      ]
    },
    {
      "id": "1-engine-auditorium",
      "name": "Engine Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.007160524150458869,
        "pitch": -0.24067742858246888,
        "fov": 1.1989879464110744
      },
      "linkHotspots": [
        {
          "yaw": -0.41490664901576224,
          "pitch": 0.03180930025510342,
          "rotation": 4.71238898038469,
          "target": "0-along-engine-drive-1"
        },
        {
          "yaw": 0.8288334661030756,
          "pitch": 0.022935133063679558,
          "rotation": 7.853981633974483,
          "target": "2-engine-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.040648979723009404,
          "pitch": 0.22928857432734695,
          "title": "Title",
          "text": "Text"
        },
        {
          "yaw": -1.1498970258976122,
          "pitch": -0.5925103609801283,
          "title": "sculpture",
          "text": "don't know what it means but it looks cool.&nbsp;<div><br></div>"
        }
      ]
    },
    {
      "id": "2-engine-auditorium-atrium",
      "name": "Engine Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 1.8140020778919874,
        "pitch": 0.28691970923785703,
        "fov": 1.1989879464110744
      },
      "linkHotspots": [
        {
          "yaw": 2.4102321950742125,
          "pitch": 0.25198416591665307,
          "rotation": 0.7853981633974483,
          "target": "0-along-engine-drive-1"
        },
        {
          "yaw": 0.9124489521746284,
          "pitch": 0.1978750542654666,
          "rotation": 5.497787143782138,
          "target": "1-engine-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.675237810206303,
          "pitch": -0.24471785590537642,
          "title": "Coffee!",
          "text": "Kopi C siew dai gao please."
        }
      ]
    }
  ],
  "name": "Nus Ben @ Engine",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
