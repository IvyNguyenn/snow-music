// CAU HINH TUYET ROI
const snowmax = 150; // So luong tuyet roi
const snowcolor = new Array(
    "#ffffff",
    "#ffffffaa",
    "#ffffff",
    "#ffffff4d",
    "#ffffff"
); // Mau sac cac hat tuyet roi

const snowtype = new Array(
    "Times",
    "Arial",
    "Times",
    "Verdana",
    "Norican",
    "Yesteryear"
);
const snowletter = "*";
const sinkspeed = 0.3;
const snowmaxsize = 50;
const snowminsize = 8;
const snowingzone = 1;
const snow = new Array();
let marginbottom;
let marginright;
let timer;
const i_snow = 0;
const x_mv = new Array();
const crds = new Array();
const lftrght = new Array();
const browserinfos = navigator.userAgent;
const ie5 =
    document.all && document.getElementById && !browserinfos.match(/Opera/);
const ns6 = document.getElementById && !document.all;
const opera = browserinfos.match(/Opera/);
const browserok = ie5 || ns6 || opera;
function randommaker(range) {
    let rand = Math.floor(range * Math.random());
    return rand;
}
export function initsnow() {
    if (ie5 || opera) {
        marginbottom = document.body.scrollHeight;
        marginright = document.body.clientWidth - 20;
    } else if (ns6) {
        marginbottom = document.body.scrollHeight;
        marginright = window.innerWidth - 20;
    }
    const snowsizerange = snowmaxsize - snowminsize;
    for (let i = 0; i <= snowmax; i++) {
        crds[i] = 0;
        lftrght[i] = Math.random() * 15;
        x_mv[i] = 0.03 + Math.random() / 10;
        snow[i] = document.getElementById("s" + i);
        snow[i].style.fontFamily = snowtype[randommaker(snowtype.length)];
        snow[i].size = randommaker(snowsizerange) + snowminsize;
        snow[i].style.fontSize = `${snow[i].size}px`;
        snow[i].style.color = snowcolor[randommaker(snowcolor.length)];
        snow[i].style.zIndex = 1000;
        snow[i].sink = (sinkspeed * snow[i].size) / 5;
        if (snowingzone == 1) {
            snow[i].posx = randommaker(marginright - snow[i].size);
        }
        if (snowingzone == 2) {
            snow[i].posx = randommaker(marginright / 2 - snow[i].size);
        }
        if (snowingzone == 3) {
            snow[i].posx =
                randommaker(marginright / 2 - snow[i].size) + marginright / 4;
        }
        if (snowingzone == 4) {
            snow[i].posx =
                randommaker(marginright / 2 - snow[i].size) + marginright / 2;
        }
        snow[i].posy = randommaker(
            2 * marginbottom - marginbottom - 2 * snow[i].size
        );
        snow[i].style.left = `${snow[i].posx}px`;
        snow[i].style.top = `${snow[i].posy}px`;
    }
    movesnow();
}
function movesnow() {
    for (let i = 0; i <= snowmax; i++) {
        crds[i] += x_mv[i];
        snow[i].posy += snow[i].sink;
        snow[i].style.left = `${snow[i].posx +
            lftrght[i] * Math.sin(crds[i])}px`;
        snow[i].style.top = `${snow[i].posy}px`;
        if (
            snow[i].posy >= marginbottom - 2 * snow[i].size ||
            parseInt(snow[i].style.left) > marginright - 3 * lftrght[i]
        ) {
            if (snowingzone == 1) {
                snow[i].posx = randommaker(marginright - snow[i].size);
            }
            if (snowingzone == 2) {
                snow[i].posx = randommaker(marginright / 2 - snow[i].size);
            }
            if (snowingzone == 3) {
                snow[i].posx =
                    randommaker(marginright / 2 - snow[i].size) +
                    marginright / 4;
            }
            if (snowingzone == 4) {
                snow[i].posx =
                    randommaker(marginright / 2 - snow[i].size) +
                    marginright / 2;
            }
            snow[i].posy = 0;
        }
    }
    console.log(marginright);
    const timer = setTimeout("movesnow()", 30);
}
for (let i = 0; i <= snowmax; i++) {
    document.write(
        `<span id='s${i}' style='position:absolute;top:-${snowmaxsize}'>${snowletter}</span>`
    );
}
// if (browserok) {
//     window.onload = initsnow;
// }
