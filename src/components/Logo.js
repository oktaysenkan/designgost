import React from "react";
import { useSpring, animated } from "react-spring";

const interp = (i) => (r) =>
  `translate3d(0, ${10 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;

const Logo = (props) => {
  const { radians } = useSpring({
    to: async (next) => {
      while (1) await next({ radians: 2 * Math.PI });
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true,
  });
  return (
    <animated.div
      className="logo"
      style={{ transform: radians.interpolate(interp(1)) }}
    >
      <svg viewBox="0 0 731 149" version="1.1">
        <title>Group 28</title>
        <g
          id="Pages"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Homepage"
            transform="translate(-355.000000, -282.000000)"
            fill="#FFFFFF"
          >
            <g id="Group-28" transform="translate(355.500000, 282.000000)">
              <path
                d="M607.34818,77.0850977 C607.34818,86.3536402 600.261867,94.4629149 590.749921,95.3197651 C579.834573,96.3054228 570.646044,87.9665346 570.646044,77.6059282 L570.646044,66.3940718 C570.646044,56.027865 579.834573,47.7057779 590.749921,48.6914356 C600.261867,49.5482858 607.34818,57.6519601 607.34818,66.9205027 L607.34818,77.0850977 Z M607.013212,35.6538724 C601.694146,32.6856987 595.537658,31 588.994225,31 C568.907674,31 552.5,46.921732 552.5,66.3940718 L552.5,77.6059282 C552.5,97.0726677 568.907674,113 588.994225,113 C589.196361,113 589.404272,113 589.606408,112.983199 C609.404193,112.675181 625.5,96.8766562 625.5,77.6059282 L625.5,66.3940718 C625.5,53.2669034 618.044066,41.7582298 607.013212,35.6538724 L607.013212,35.6538724 Z"
                id="Fill-1"
              />
              <path
                d="M549.435294,57.5 L519.088655,57.5 C517.937185,57.5 516.989916,58.4497512 516.989916,59.611194 L516.989916,72.100995 C516.989916,73.2624378 517.931513,74.2121891 519.071639,74.2121891 L533.666387,74.2121891 L533.666387,78.8293532 C533.666387,88.8646766 525.594748,97.0062189 515.639916,97.0062189 L506.365756,97.0062189 C496.410924,97.0062189 488.339286,88.8646766 488.339286,78.8293532 L488.339286,36.159204 C488.339286,26.1238806 496.39958,17.9937811 506.348739,17.9937811 L515.639916,17.9937811 C524.953782,17.9937811 532.634034,25.1283582 533.581303,34.2654229 C533.694748,35.3353234 534.57395,36.159204 535.640336,36.159204 L549.361555,36.159204 C550.558403,36.159204 551.517017,35.1350746 551.443277,33.9164179 C550.320168,15.5621891 535.441807,0.806716418 517.154412,0.0457711443 C516.655252,0.0171641791 516.156092,0 515.639916,0 L506.348739,0 C486.637605,0 470.5,16.2716418 470.5,36.159204 L470.5,38.0930348 C470.5,42.6758706 471.509664,47.2415423 473.687815,51.2636816 C477.193277,57.7116915 479.195588,65.1208955 479.195588,72.9935323 C479.195588,75.7226368 478.934664,78.4116915 478.463866,81.0263682 C475.502941,97.4810945 486.620588,113.363682 503.143908,114.856965 C503.489916,114.897015 503.841597,114.9199 504.193277,114.942786 C504.783193,114.954229 505.753151,114.982836 506.343067,115 L515.639916,115 C516.184454,115 516.706303,114.982836 517.233824,114.954229 C536.230252,114.107463 551.5,98.1848259 551.5,78.8293532 L551.5,59.5997512 C551.5,58.4325871 550.57542,57.5 549.435294,57.5"
                id="Fill-3"
              />
              <path
                d="M657.91916,31 C645.48525,31 633.919615,36.9527419 628.034648,46.9206447 C628.023298,46.9318446 628.011948,46.9430445 628.006273,46.9598443 C626.956399,48.942225 618.551734,66.1732568 639.895383,74.3043775 L657.90781,81.1699105 L657.91916,81.1699105 L670.330369,85.9018644 C671.834242,86.4730588 672.350667,88.3770402 671.261068,89.5586287 C667.963897,93.1425937 663.213928,95.3937718 657.91916,95.3937718 C651.143218,95.3937718 645.235551,91.6866079 642.159705,86.2266612 C641.626255,85.2690705 640.457207,84.8714744 639.447058,85.3194701 L627.030174,90.9306153 C625.9349,91.4234105 625.492251,92.7225978 626.042725,93.7753876 C632.018492,105.171276 644.089202,113 657.91916,113 C670.307669,113 682.588354,107.114457 687.718547,97.2361538 L687.729897,97.2249539 C688.002297,96.6649594 697.150385,77.7651438 675.954287,69.6956225 L657.91916,62.8300895 L646.898324,58.6357304 C644.611302,57.7621389 644.043802,54.7997678 645.87115,53.1869835 C649.060496,50.3366114 653.294041,48.6062282 657.91916,48.6062282 C665.029926,48.6062282 671.187293,52.6773885 674.121264,58.5909308 C674.626339,59.6101209 675.835112,60.0637165 676.879311,59.593321 L689.273495,53.9933757 C690.351744,53.5117804 690.800068,52.2461927 690.289319,51.1990029 C684.512176,39.2767193 672.157717,31 657.91916,31"
                id="Fill-5"
              />
              <path
                d="M727.460568,41.8873876 L712.06705,41.8873876 L712.06705,16.0634292 C712.06705,14.9214766 711.150702,14 710.027618,14 L696.539432,14 C695.416347,14 694.5,14.9214766 694.5,16.0634292 L694.5,41.8873876 L694.5,59.6611453 L694.5,111.936571 C694.5,113.078523 695.416347,114 696.539432,114 L710.027618,114 C711.150702,114 712.06705,113.078523 712.06705,111.936571 L712.06705,59.6611453 L727.460568,59.6611453 C728.58924,59.6611453 729.5,58.7340155 729.5,57.5977161 L729.5,43.9508169 C729.5,42.8145175 728.58924,41.8873876 727.460568,41.8873876"
                id="Fill-7"
              />
              <path
                d="M63.6607143,71.1177436 C63.6607143,85.4133711 52.1630252,97.0089041 37.9710084,97.0089041 L18.3222689,97.0089041 L18.3222689,17.9910959 L37.9710084,17.9910959 C52.1630252,17.9910959 63.6607143,29.5866289 63.6607143,43.8879769 L63.6607143,71.1177436 Z M50.5407563,1.8820574 C46.5644958,0.66358255 42.3443277,0 37.9710084,0 L2.62142857,0 C1.45294118,0 0.5,0.966771129 0.5,2.14520221 L0.5,112.860518 C0.5,114.033229 1.45294118,115 2.62142857,115 L37.9710084,115 C38.3397059,115 38.7140756,115 39.0941176,114.982838 C62.537605,114.382182 81.5,94.8694225 81.5,71.1177436 L81.5,43.8879769 C81.5,24.1578371 68.4027311,7.34517236 50.5407563,1.8820574 L50.5407563,1.8820574 Z"
                id="Fill-9"
              />
              <path
                d="M187.919795,31 C175.486175,31 163.915135,36.9527419 158.041654,46.9206447 C158.030304,46.9318446 158.018955,46.9430445 158.007605,46.9598443 C156.957756,48.942225 148.547612,66.1732568 169.902113,74.3043775 L187.91412,81.1699105 L187.919795,81.1699105 L200.330715,85.9018644 C201.840228,86.4730588 202.350965,88.3770402 201.261392,89.5586287 C197.964298,93.1425937 193.208765,95.3937718 187.919795,95.3937718 C181.144011,95.3937718 175.230807,91.6866079 172.160707,86.2266612 C171.62727,85.2690705 170.458249,84.8714744 169.453799,85.3194701 L157.031529,90.9306153 C155.936281,91.4234105 155.493642,92.7225978 156.044103,93.7753876 C162.019731,105.171276 174.095834,113 187.919795,113 C200.308015,113 212.588414,107.114457 217.718488,97.2361538 L217.729837,97.2249539 C218.002231,96.6649594 227.155781,77.7651438 205.954502,69.6956225 L187.919795,62.8300895 L176.899216,58.6357304 C174.612247,57.7621389 174.044761,54.7997678 175.872066,53.1869835 C179.061337,50.3366114 183.294783,48.6062282 187.919795,48.6062282 C195.030395,48.6062282 201.187619,52.6773885 204.121522,58.5909308 C204.626584,59.6101209 205.841005,60.0637165 206.879504,59.593321 L219.279074,53.9933757 C220.351623,53.5117804 220.799937,52.2461927 220.2892,51.1990029 C214.512191,39.2767193 202.15802,31 187.919795,31"
                id="Fill-12"
              />
              <path
                d="M242.399523,5 L228.600477,5 C227.444356,5 226.5,5.97633136 226.5,7.17159763 L226.5,20.9704142 C226.5,22.0887574 227.375676,23 228.463116,23 L242.536884,23 C243.618601,23 244.5,22.0887574 244.5,20.9704142 L244.5,7.17159763 C244.5,5.97633136 243.555644,5 242.399523,5"
                id="Fill-14"
              />
              <path
                d="M242.381679,31 L228.624046,31 C227.450382,31 226.5,31.9382363 226.5,33.0969016 L226.5,111.942663 C226.5,113.07872 227.433206,114 228.583969,114 L242.40458,114 C243.561069,114 244.5,113.073068 244.5,111.931359 L244.5,33.0969016 C244.5,31.9382363 243.555344,31 242.381679,31"
                id="Fill-16"
              />
              <path
                d="M119.578469,31.0022747 C99.4546749,31.2262769 83.5,47.65124 83.5,67.1674338 L83.5,76.8387298 C83.5,95.6045161 99.2872172,112.281482 118.625692,112.975889 C133.431261,113.502294 146.435216,105.359813 152.636925,93.3980942 C153.329853,92.0540809 152.29046,90.4636651 150.737146,90.4636651 L133.465907,90.4636651 C132.946211,90.4636651 132.455387,90.659667 132.062727,90.9900703 C128.782867,93.7676979 124.469388,95.4477146 119.751701,95.391714 C109.629173,95.2629127 101.654722,86.9076298 101.654722,77.0851323 L101.654722,68.2146442 C101.654722,57.4849376 108.993988,49.3088564 118.683436,48.6536499 C128.551891,47.9816433 136.942098,54.9425124 138.172046,64.0482028 L119.797896,64.0482028 C118.619918,64.0482028 117.661367,64.972212 117.661367,66.1146233 L117.661367,79.5939572 C117.661367,80.7307685 118.619918,81.6547776 119.797896,81.6547776 L137.860228,81.6547776 L154.253757,81.6547776 C155.408638,81.6547776 156.361414,80.7923691 156.430707,79.6723579 C156.476902,78.9891512 156.5,78.3003443 156.5,77.6059374 L156.5,66.4002262 C156.5,65.6162184 156.465354,64.8266105 156.40761,64.0482028 C155.154564,45.534419 139.032432,30.7894726 119.578469,31.0022747"
                id="Fill-18"
              />
              <path
                d="M395.726108,99.727124 C395.21788,97.8821765 394.449763,96.0881631 393.479509,94.396018 C393.479509,94.3846993 393.462184,94.3677213 393.444858,94.3394245 C393.288924,94.0564571 393.132991,93.7734897 392.982832,93.4848629 C389.581171,87.2312832 387.606013,80.0552298 387.606013,72.4490659 C387.606013,68.3686758 388.154668,64.4184508 389.2,60.666303 C390.93837,54.424042 389.765981,47.8422201 386.185285,42.7261694 C384.787658,40.7623756 383.066614,39.013637 381.004826,37.5761626 C380.150079,36.981931 379.243354,36.4273149 378.330854,35.9009955 C372.936709,32.7996727 366.670491,31.0226374 359.994225,31.0226374 L359.994225,31.0792309 C353.323734,31.0792309 347.057516,32.8675849 341.657595,35.9689077 L341.657595,33.0996182 C341.657595,31.9394518 340.698892,31 339.520728,31 L325.636867,31 C324.458703,31 323.5,31.9394518 323.5,33.0996182 L323.5,64.5486158 C323.5,64.7014182 323.517326,64.842902 323.546203,64.9843857 C323.517326,65.6012546 323.5,66.2237829 323.5,66.8463112 L323.5,73.4281331 L323.5,78.1763262 L323.5,111.883404 C323.5,113.020933 324.441377,113.943407 325.602215,113.943407 L339.543829,113.943407 C340.704668,113.943407 341.66337,113.003955 341.66337,111.872085 L341.66337,109.05373 L341.66337,73.4281331 L341.66337,66.8463112 C341.66337,56.9367926 349.887421,48.8778808 359.994225,48.8778808 L359.994225,48.8212873 C369.962421,48.8212873 378.088291,57.0499795 378.330854,66.8066958 C378.34818,66.9481795 378.34818,67.1009819 378.34818,67.2594436 L378.34818,111.939997 C378.34818,113.077526 379.289557,114 380.450396,114 L394.397785,114 C394.432437,114 394.495965,114 394.536392,113.988681 C395.541297,113.932088 396.349842,113.173735 396.465348,112.211646 C396.5,112.109778 396.5,112.024887 396.5,111.923019 L396.5,105.284604 C396.5,104.97334 396.482674,104.645098 396.465348,104.333833 C396.396044,102.771853 396.147706,101.221192 395.726108,99.727124"
                id="Fill-20"
              />
              <path
                d="M449.390645,65.0060956 C444.403102,65.1783205 440.136236,68.3728152 438.88935,73.0728892 C436.973264,80.2674468 442.389782,86.7786604 449.424963,86.9953305 C454.429665,87.1508885 458.559259,83.4008295 459.291375,78.5896426 C460.441027,71.2728609 456.797604,64.7727586 449.390645,65.0060956"
                id="Fill-22"
              />
              <path
                d="M416.602969,65.0060956 C409.208281,64.7727586 405.570987,71.2728609 406.703352,78.5896426 C407.452543,83.4008295 411.575954,87.1508885 416.568655,86.9953305 C423.608763,86.7786604 429.018952,80.2674468 427.11452,73.0728892 C425.867774,68.3728152 421.607108,65.1783205 416.602969,65.0060956"
                id="Fill-24"
              />
              <path
                d="M302.345278,70.9255168 L302.333729,70.9255168 L302.333729,78.2387748 C302.287534,88.0275508 294.249565,95.9809312 284.28872,96.1395457 C274.04493,96.3094897 265.660497,87.7443107 265.660497,77.6836243 L265.660497,67.2943794 C265.660497,57.2223634 274.04493,48.6571844 284.300269,48.8271285 C294.284211,48.9800781 302.345278,57.007101 302.345278,66.824201 L302.345278,70.9255168 Z M318.363471,31 L304.487581,31 C303.303829,31 302.345278,31.940357 302.345278,33.1016411 L302.345278,35.9057176 C302.027685,35.724444 301.69277,35.5375055 301.357855,35.3675615 C296.18399,32.5918091 290.276776,31.0113296 283.994226,31.0113296 C263.922402,31.0113296 247.5,47.1163586 247.5,66.824201 L247.5,77.4683619 C247.5,96.1961937 261.889812,112.261569 280.910695,113.825054 C282.267679,113.93835 283.618889,113.983669 284.952776,113.93835 L285.362759,113.93835 C291.524047,113.711758 297.309998,111.950005 302.333729,109.055292 L302.333729,112.618452 C302.333729,122.503529 294.451669,130.995066 284.375336,131.182004 C274.732084,131.368943 266.717212,124.231293 265.747113,115.065646 C265.637399,114.000663 264.730818,113.196261 263.64523,113.196261 L249.694273,113.196261 C248.458551,113.196261 247.488451,114.227255 247.563518,115.416863 C248.504746,130.190664 258.673469,142.613572 272.451194,147.151078 C276.193007,148.386004 280.200443,149.043121 284.358013,148.997803 C304.493355,148.799535 320.494226,132.252651 320.494226,112.499491 L320.494226,110.295883 L320.494226,110.250565 L320.494226,66.824201 C320.494226,66.2520561 320.44803,65.685576 320.419158,65.1134311 C320.465354,64.9378223 320.5,64.7622134 320.5,64.5696102 L320.5,33.1016411 C320.5,31.940357 319.541449,31 318.363471,31 L318.363471,31 Z"
                id="Fill-26"
              />
            </g>
          </g>
        </g>
      </svg>
    </animated.div>
  );
};

export default Logo;
