(function() {
  var faces = {
    "streetcar": {"parts":[{"path":"M360,337.333L365,392 M365,392h45 M401.667,337.333   L410,392 M360,337.333h41.667 M398,332.333L357.667,332 M352.334,341.333L360,392 M352.334,341.333H335 M335,341.333l-1.666,49    M333.334,390.333h26.414 M328.334,406L365,407.334 M365,407.334l48.334-3 M413.334,404.334v9.333 M413.334,413.667L365,415.334    M365,415.334L328.334,412 M328.334,412v-6 M330.667,332h27 M357.667,332v-11.667 M357.667,320.333h31.5 M389.167,320.333l8.833,12    M357.667,320.333h-27 M330.667,320.333V332 M411.334,414.5L412,426 M412,426h-43.333 M368.667,426l-42-2.666 M326.667,423.334V332    M328.334,320.333l-69.667,10 M328.334,330.333l-69.667,8.333 M258.667,338.667v-8.333 M258.667,338.667l-3,76.667    M255.667,415.334l71,8 M312.334,352l-0.667,57 M311.667,409H323 M323,409v-57 M323,352h-10.666 M309.334,346l17.333-0.333    M309.334,346v74.25 M306,347.333L284.814,349 M284.814,349v31.5 M284.814,380.5H306 M306,380.5v-33.167 M281.667,349h-21.333    M260.333,349v31.5 M260.333,380.5h21.333 M281.667,380.5V349 M247,332.333l-0.667,9 M243.667,343l2.667-1.667 M243.667,343v69    M243.667,412l-71-7.666 M172.667,404.334v-56.167 M172.667,348.167l3.667-6.833 M176.333,341.333l70.667-9 M238,358l-16.667,0.333    M221.333,358.333V400 M221.333,400H227 M227,400v-40 M229.667,360v40 M229.667,400H236 M236,400v-40 M236,360h-6.333 M227,360   h-5.667 M238,358v53.388 M219.333,354.667v52 M219.333,354.667H238 M238,354.667v9.25 M190.667,360L191,383.125 M191,383.125   h11.333 M202.333,383.125v-23.833 M190.667,360l11.667-0.708 M206,359.292v25.402 M206,384.694h11 M217,384.694V360 M217,360   l-11-0.708 M187.667,360h-2.333 M185.333,360v38 M185.333,398h2.333 M187.667,398v-38 M178.333,359.646H182 M182,361.823v36.354    M178.333,359.646V398 M182,398.177L178.333,398 M182,359.646l3.333,0.354 M176.333,358h11.333 M187.667,358v46.334    M187.667,404.334l-11.333-1.667 M176.333,402.667V358 M167,342.167l0.667,60.5 M167.667,402.667L139,398 M139,398l1.333-43.333    M140.333,354.667l7.333-9.917 M147.667,344.75L167,342.167 M146,354.667L164,358 M146,354.667v24.156 M164,379l-18-0.177 M164,379   v-21 M178.333,336.833l-9-14.833 M169.333,322l17.167-20.333 M191,301.667h-4.5 M186.5,301.667L169.333,299 M169.333,299   L164,300.333 M166.667,300.333V322 M166.667,322l6,16.667 M232.833,305L227,332.333 M236,305l-3.167,25.333 M236,305   l-11.833-14.333 M232.833,305l-24.667-14.333 M202.333,296l5.833-5.333 M208.167,290.667h16 M224.167,290.667h8.667    M279.71,418.043L529,457.667 M371.688,426l165.646,24 M68,384.694L139,396 M139.667,392.727L73,383.125","attrs":{"stroke-miterlimit":"10","stroke":"#000000","fill":"none","stroke-width":"2"}}]},
    "danny": {"parts":[{"attrs":{"fill":"#FFEBDE"},"path":"M22.574,131.043c0.419,2.93,4.183,13.387,3.765,17.151c-0.418,3.764,2.928,16.731,12.967,17.986   c0,0,4.183,2.509,4.183,5.02c0,2.509,41.831,43.504,46.431,44.341c4.602,0.835,40.157-1.256,43.503-3.766   s20.078-21.333,21.333-24.681c1.254-3.347,3.347-8.783,3.347-8.783s7.946-71.947,10.457-74.457   c2.509-2.51-4.184-25.516-4.184-25.516s-65.255-23.007-70.274-22.17c-5.02,0.838-50.195,16.314-53.96,19.243   c-3.764,2.928-10.457,19.241-12.966,27.188C24.667,110.547,22.574,131.043,22.574,131.043z"},{"attrs":{"fill":"#5F3A00"},"path":"M194.493,94.653c-0.417-7.947-7.109-11.712-8.365-12.13c-1.254-0.418-1.254-0.418-1.254-0.418   s2.929-2.51,1.254-10.875c-1.674-8.366-10.456-15.058-12.548-18.405s-11.713-7.112-13.386-10.876   c-1.673-3.765-10.877-12.131-13.805-12.131c0,0-1.254-5.02-12.549-8.784c0,0-7.11-10.457-20.915-8.366   c0,0-7.11-15.477-23.424-8.784c0,0-6.692,2.091-6.692,7.111c0,0-17.988-5.019-24.68,1.673c0,0-7.948,3.764-7.948,5.438   c0-0.63,0-1.673,0-1.673s-20.497,6.693-19.66,13.805c0,0-2.092,10.876-4.183,12.549c-2.092,1.673-8.368,1.673-7.112,12.13   c0.402,3.348-9.622,20.079-10.458,23.843C7.934,82.523,4.169,94.235,4.169,98s2.929,10.039,2.51,11.294   c-0.419,1.254-2.51,8.366-0.837,10.876s8.784,10.038,8.784,14.222s-2.508,14.641-0.417,15.896c2.092,1.255,7.948-5.856,7.948-5.856   s2.51-2.092,2.928-5.857c0.419-3.764,2.092-7.528,2.092-7.528s6.274,4.183,6.693,7.528c0.418,3.347,7.11,25.518,6.274,29.7   s7.111,28.024,10.039,30.953c2.929,2.93,15.895,16.314,17.15,17.568c1.254,1.255,13.386,15.479,17.987,17.987   c4.601,2.511,28.445,8.365,31.79,6.692c3.346-1.673,12.131-3.764,18.823-12.548c6.692-8.785,8.366-19.661,12.55-25.936   c4.182-6.274,8.365-13.804,9.201-16.731c0.838-2.928,6.273-45.175,7.948-57.306c0,0,6.275-2.928,9.203-7.947   c2.927-5.02,5.019-2.929,10.875-7.53C191.566,108.875,194.912,102.601,194.493,94.653z M120.039,204.246   c-9.621,2.93-12.549,1.256-16.314,0.837c-3.764-0.418-14.222-3.764-15.478-6.692c-1.254-2.929-4.183-7.529-4.183-7.529   l10.458-2.929c5.438-0.418,16.314-2.51,19.243-2.51c2.928,0,15.894-1.254,17.148-0.836   C132.169,185.005,129.66,201.317,120.039,204.246z M161.867,133.977c-0.418,1.674-1.674,12.549-1.674,15.896   s-3.346,25.935-3.346,27.608s-9.204,15.059-9.204,15.059s-2.509-6.693-2.928-9.621c-0.418-2.928-17.568-10.457-20.496-11.712   c-2.928-1.256-4.602,2.928-5.855,3.765c-1.256,0.837-14.223,0-16.732-0.837c-2.51-0.838-9.203-0.838-11.713-0.418   c-2.51,0.419-11.712,12.13-12.131,13.385c-0.418,1.254-3.346,7.529-3.346,8.784s-1.673,1.674-3.764,1.255   c-2.092-0.42-6.275-1.255-8.366-4.601c-2.092-3.346-14.222-17.15-15.895-21.752c-1.673-4.603-8.366-30.117-8.366-37.228   s0-9.622,0-9.622s0.836-35.559,3.346-26.356s22.169,7.53,22.169,7.53c-2.091-1.674-6.693-15.059-6.693-15.059   c12.968,16.731,25.517,9.621,25.517,9.621c-10.875-3.346-9.622-18.823-9.622-18.823C75.697,98.837,89.5,99.255,89.5,99.255   c-11.712-6.275-7.11-22.17-7.11-22.17C80.298,90.89,95.358,98,95.358,98c-14.222-12.549,12.966-9.203,8.365-8.366   s-4.601,1.673-4.601,1.673c-0.836,2.51,16.313,3.765,16.313,3.765s5.02-2.928,0.418,2.092s-16.313,0-16.313,0   c0,3.347,8.366,5.856,14.221,6.275c5.855,0.418,10.876-3.764,14.642-11.711c3.764-7.948,6.273-15.477,5.855-12.549   c-0.418,2.927,4.601,6.693,5.02,10.039s5.438,9.203,5.438,10.876s7.947,6.692,8.785,5.019c0.836-1.673,5.02-2.091,6.692-2.091   s0.419,11.294,0.419,13.386S162.284,132.305,161.867,133.977z"}]},
    "yen": {"parts":[{"attrs":{fill:"#000"},"path":"M97.825,16.19c0,0-8.197-5.218-18.632-1.491c-10.434,3.727-21.24,13.042-27.576,21.24   c-6.334,8.199-16.769,36.892-18.632,44.718c-1.863,7.826-1.491,26.83-1.119,31.674c0.373,4.845,1.119,35.03,0.746,38.011   c-0.373,2.981-1.49,26.457-3.727,30.558c-2.236,4.098-12.669,21.613-13.788,23.475c-1.118,1.864-9.689,22.732-12.297,30.931   c0,0,22.358-19.004,17.142-13.042c0,0-4.472,11.924-4.844,19.004c0,0,5.59-4.101,4.844-2.609c0,0,0.315,5.038,0.655,9.324   c0.03,0.377,0.06,0.75,0.09,1.111c0.373,4.471,1.863-8.944,5.217-10.808c0,0,5.59,0.745,5.217,3.728   c-0.373,2.979,17.887-46.953,17.142-35.774s10.433-29.439,12.297-19.377c1.863,10.06,2.608,19.377,3.354,26.084   c0.746,6.708,0.372-48.07,4.099-40.99s2.981,11.924,4.472,16.397c1.491,4.471,3.727-38.757,2.981-24.596   c0,0,31.303,21.613,52.543,9.689c21.24-11.927,22.358-18.261,22.358-18.261s7.453,23.104,7.453,29.812   c0,6.708,11.926,42.109,11.553,44.346c-0.374,2.234,8.57-23.478,2.608-32.422c0,0,14.159,32.795,8.197,41.736   c0,0,10.807-35.774,3.727-63.35s-3.726-38.009-3.354-43.971c0.372-5.962,4.845-21.614,2.607-29.066   c-2.235-7.453-25.339-63.35-35.4-71.548c-10.062-8.199-17.141-11.18-17.514-14.161c-0.373-2.981-15.651-9.316-21.986-7.453   S100.434,15.444,97.825,16.19z"},{"attrs":{"fill":"#F9E8B4"},"path":"M64.288,52.336c-2.136,3.417-7.826,18.26-8.571,23.849c-0.745,5.59-3.726,11.925-4.099,13.788   c-0.373,1.863-2.981,13.043-2.981,14.906c0,1.862,1.491,11.179,2.236,14.906c0.745,3.726,5.962,21.24,7.453,25.712   c1.491,4.472,12.297,21.614,17.515,25.712c5.217,4.099,18.26,14.161,19.75,15.279s16.022,8.569,19.377,9.314   c3.354,0.746,11.926,0.746,13.788-0.37c1.862-1.118,10.062-5.962,11.925-8.944c1.864-2.982,6.335-13.79,8.199-16.77   c1.862-2.98,12.669-17.887,14.532-22.731c1.862-4.844,4.099-22.358,4.099-27.947c0-5.589-3.727-29.812-9.316-39.874   c-5.59-10.062-16.769-29.067-21.612-32.793c-4.846-3.727-15.652-11.924-24.223-11.924c-8.571,0-23.849,0.745-29.812,3.727   C76.584,41.157,68.014,46.374,64.288,52.336z"}]},
    "victor": {"parts":[{"attrs":{"fill":"#FFE1C0"},"path":"M95.273,7.537c11.43-0.756,33.934,3.89,53.816,23.991c19.884,20.1,22.91,54.682,23.56,57.923   c0.647,3.242,6.267,5.403,6.267,5.403s6.268,4.54,0.432,17.291c0,0-3.242,14.263-3.89,17.938   c-0.648,3.676-3.459,11.239-3.891,12.537c-0.432,1.296-2.379,4.753-3.242,4.97c-0.863,0.216-2.377,0.216-2.377,0.216   s-2.593,18.156-5.835,26.584c-3.242,8.43-11.239,21.183-13.834,24.208c-2.593,3.025-6.051,6.7-10.805,10.374   c-4.756,3.674-24.641,9.295-31.125,9.295c-6.483,0-25.936-3.675-28.096-5.619c-2.162-1.945-6.051-7.999-6.268-9.511   c-0.216-1.513-2.162-6.7-3.026-7.779c-0.865-1.081-16.643-24.423-18.155-28.529c-1.513-4.107-3.242-13.185-3.242-13.185   s-1.512,0.649-3.242-1.513c-1.729-2.161-6.7-19.236-6.7-20.965s0.216-11.023,0-11.888c-0.216-0.864-1.08-4.97-1.729-6.916   c-0.648-1.945-1.729-3.242-1.081-4.539c0.648-1.297,7.349-5.835,8.213-6.051c0.864-0.216-12.537-40.849,3.889-60.085   C61.34,22.453,62.639,9.696,95.273,7.537z"},{"attrs":{"fill":"#CFCFCF"},"path":"M96.786,155.807c4.106,1.08,5.187,1.944,9.078,1.08c3.891-0.865,7.997-2.811,9.726-0.865   s17.289,8.647,20.315,8.862c3.027,0.216,4.755,2.81,5.404,5.188c0.647,2.377-1.297,7.78-3.242,9.077s-7.132,4.539-10.157,4.539   c-3.027,0-8.646-1.729-11.889-1.945c-3.241-0.217-18.803-1.297-21.396-0.217s-6.484,1.729-8.429,1.729s-9.726,0.649-12.104,1.081   c-2.377,0.432-4.323-2.594-5.835-4.322c-1.513-1.729-4.322-6.917-2.81-8.861c1.513-1.945,4.755-4.107,6.7-5.188   c1.945-1.08,9.509-0.863,11.023-2.377s7.133-7.565,9.294-7.997C94.624,155.158,96.786,155.807,96.786,155.807z"},{"attrs":{"fill":"#CFCFCF"},"path":"M99.379,188.226c3.694,0.2,15.345,0.863,18.586,0.216c3.242-0.648,6.701-1.73,6.701-0.648   c0,1.081-7.351,13.617-8.214,16.643c-0.864,3.025-8.214,9.511-8.43,11.671c-0.215,2.161-2.594,4.105-3.674,5.403   c-1.08,1.296-3.673-4.971-5.835-7.348c-2.162-2.38-3.242-7.565-5.187-8.646c-1.945-1.08-7.132-12.32-6.484-14.48   C87.492,188.874,91.383,187.794,99.379,188.226z"},{"attrs":{"fill":"#CFCFCF"},"path":"M81.873,204.651c2.749-1.622,7.997,4.971,9.942,4.971s28.961,0.649,30.475-0.216   c1.512-0.865,6.915-4.539,7.131-5.187c0.218-0.649,7.566,20.531,6.053,28.529c0,0-6.699,2.809-8.213,4.97s-2.809,5.188-4.538,5.835   c-1.73,0.649-10.376,4.54-12.104,4.108c-1.729-0.433-7.562-2.596-9.293-1.514c-1.729,1.081-8.861,1.729-9.51,0.647   c-0.648-1.08-7.133-2.593-8.646-2.376c-1.513,0.216-5.404-0.001-5.835-2.162c-0.432-2.16-4.972-4.972-4.539-11.022   S73.443,209.621,81.873,204.651z"},{"attrs":{"fill":"#CFCFCF"},"path":"M41.023,122.521c0.865-0.648,1.297-8.86,1.297-11.886s-6.051-27.017-1.08-33.933   c0,0-1.298-22.477,8.861-35.229c10.158-12.752,19.453-25.071,25.503-26.368c6.051-1.296,18.373-11.455,47.117,0   c0,0,12.753,7.997,16.21,11.239c3.457,3.242,9.293,8.861,11.671,11.455c2.377,2.594,12.968,20.533,12.968,24.639   c0,4.106,2.161,20.534,2.161,24.424s0.647,18.37,1.512,19.883c0.865,1.514,1.729,3.459,3.674,3.675c0,0,2.596-5.619,1.082-10.375   c0,0,2.594-1.945,5.619-0.865c3.024,1.081,5.836,1.514,5.836,1.514s-4.322-5.835-4.539-9.078   c-0.217-3.242-1.945-38.902-7.781-45.818c-5.836-6.916-10.157-18.156-12.751-18.588c-2.594-0.432-9.509-11.671-17.938-12.536   c-8.429-0.864-19.885-8.212-20.965-9.509c-1.08-1.296-5.835-3.458-8.86-3.89c-3.027-0.433-24.855-0.648-32.42,4.106   c-7.565,4.755-17.94,9.078-19.668,10.159c-1.729,1.08-9.078,2.594-9.078,4.754c0,2.161-1.297,5.835-1.945,6.7   C46.86,27.858,32.812,48.39,31.731,54.01c-1.081,5.619-3.244,24.854-3.675,27.448c-0.432,2.594-2.809,12.536-1.08,14.913   c1.728,2.378,3.458,10.375,3.89,11.023c0.432,0.648,2.593,8.214,2.161,9.51c-0.433,1.297,4.322,2.594,5.403,2.594   C39.511,119.498,41.023,122.521,41.023,122.521z"}]},
    "max": {"parts":[{"attrs":{"fill":"#FFD69F","display":"inline"},"path":"M149.667,115c1,1.667,3.499,8,3.333,8.833s-1.499,13.333-3.166,14.333s-13.5,2.5-13.5,2.5   l-0.5-20.167l2.833-8.667L149.667,115z"},{"attrs":{"fill":"#FFD69F"},"path":"M26.438,122.163c0,0-1.667,5-1.875,6.25c-0.208,1.251,1.666,10,1.666,11.458s0.209,9.792,0.417,11.667    c0.208,1.875,2.708,8.957,2.708,10.625c0,1.667,2.292,7.707,6.875,8.125c4.583,0.418,15.625,1.251,17.292,0.418    c1.667-0.835,2.708-31.459,1.667-33.96c-1.042-2.499-25.209-15-25.209-15L26.438,122.163z"},{"attrs":{"fill":"#FFD69F"},"path":"M38.312,157.375c0,0,13.542,44.375,15.416,48.126c1.875,3.75,7.708,24.583,24.375,28.334    c0,0,11.876,12.708,22.084,13.749c10.208,1.042,20-0.001,24.792-0.833c4.791-0.833,16.25-9.79,19.166-17.082    c0,0,13.749-16.877,16.666-24.168s17.918-57.501,12.084-92.5c-5.834-35-16.459-64.375-16.459-64.375l-72.5-3.542L37.479,63.002    l-2.501,72.086L38.312,157.375z"},{"attrs":{"fill":"#2B2D30"},"path":"M42.889,90.742c0,0-3.853,15.412-1.927,20.228c1.927,4.816,1.927,4.816,1.927,4.816l0,0    c0,0-3.372,6.262-3.372,12.041c0,5.777-2.408,26.487,1.445,36.602c3.854,10.113,6.743,17.338,5.298,20.228    c0,0-7.706-3.371-9.151-9.151s-5.779-36.603-5.779-38.528c0-1.927-7.707-13.484-8.669-16.375    c-0.963-2.89-4.816-15.893-4.334-20.709c0.481-4.816,0-12.522,0-14.93s1.445-12.521,1.927-13.966s-2.891-5.78-0.964-10.595    c0,0-0.481-13.003,7.706-18.301c0,0,3.854-8.187,10.114-11.077c0,0,7.661-9.487,15.578-9.279c0,0,8.542-12.917,20.208-11.042    c0,0,21.459-10.625,30.209-6.875c0,0,12.499,2.917,13.749,4.584c0,0,7.5-3.125,11.25,2.083c0,0,10.419,3.336,10.835,6.044    c0,0,13.334,4.375,13.959,7.083c0.625,2.708,9.374,3.958,9.999,9.375c0.624,5.417,15.416,28.544,16.458,30.002    c1.043,1.458,6.458,7.916,5,15.416c-1.457,7.5-6.665,27.293-6.874,35.209c-0.209,7.917-1.251,21.042-1.459,23.333    c-0.209,2.293-2.291,27.918-4.167,31.043c-1.875,3.125-2.708,3.542-2.708,4.167s3.75-33.75,1.25-46.042    s-8.124-36.667-7.708-41.667c0.417-5-1.667-10-3.959-11.25c-2.291-1.25,3.126,6.041-4.166,11.666c0,0,4.583-9.375-1.459-13.75    c0,0-1.249,9.792-8.541,15.208c0,0,10.627-15.208,2.084-12.708c0,0-11.043,24.375-19.168,25.417c0,0,13.336-23.126-11.666-19.792    c0,0-2.291,13.333-19.167,18.75c0,0,16.25-15.417,6.667-15.208c0,0-7.707,12.917-21.666,17.292c0,0,20.001-22.083,6.458-14.375    c0,0-4.999,8.958-23.958,8.958c0,0,20-14.166,11.667-13.541c0,0-19.167,15-22.917,15.625c0,0,10-13.958,3.125-14.375    c0,0-0.209,4.167-5.625,6.042C44.98,90.292,42.889,90.742,42.889,90.742z"}]},
    "dylan": {"parts":[{"attrs":{"fill":"#FFE4CD"},"path":"M48.667,114.334c0,0-2.333-0.666-6-0.833s-5.833-1.167-6.5,2.333s-1.333,7.667-0.833,9   s12.333,26.665,14.5,27.332S48.667,114.334,48.667,114.334z"},{"attrs":{"fill":"#FFE4CD"},"path":"M164.334,159.5c0,0,3.167-1.167,4.5-2.667s7.001-12.333,7.667-13.5s6.666-9.667,4.833-21.667   c0,0-2.001-8.833-2.667-8.833S165.501,127.667,165.334,129S164.334,159.5,164.334,159.5z"},{"attrs":{"fill":"#FFDDBF"},"path":"M45.649,116.046c0,0,1.068,18.158,0.534,25.101s4.273,36.852,5.341,40.59s11.215,20.295,13.352,25.102   s18.693,28.84,30.977,28.84s21.363-3.205,29.374-10.147c0,0,13.885-12.818,16.556-16.022s13.352-15.488,15.488-18.692   s6.943-14.419,6.943-17.624s1.602-18.159,2.67-22.432s2.137-21.362,2.671-27.771s9.612-41.124,6.942-49.135   s-14.954-32.579-18.692-33.647s-37.92-6.409-44.862-6.409s-43.259,0.534-46.464,2.136S46.183,51.423,45.115,55.696   s-5.34,25.101-5.875,31.51s3.204,17.625,3.738,20.295S45.649,116.046,45.649,116.046"},{"attrs":{"fill":"#5F3A00"},"path":"M146.056,41.276c0,0-41.124,18.692-77.975,14.42c-36.851-4.272-22.965-17.09-19.227-18.158   s18.693-13.352,20.295-13.886s26.169-12.283,41.657-11.215s30.442,10.147,36.317,13.886s22.965,17.09,23.499,21.363   s14.421,23.5,12.284,38.988s-3.205,24.033-2.671,26.704s-2.671,8.544-5.341,12.283s-4.806,6.41-5.874,8.012   c0,0-2.67-25.636-0.534-34.181s4.273-16.022,0.534-20.829s-10.147-22.965-10.147-27.238S151.931,55.696,146.056,41.276z"},{"attrs":{"fill":"#5F3A00"},"path":"M56.866,49.821c0,6.089-9.079,5.341-10.147,9.079s-6.943,20.829-3.205,34.181s2.136,21.363,2.136,25.636   s-0.534,7.477-0.534,7.477s-0.535-6.408-1.603-12.283S32.832,89.876,33.9,77.059s8.011-30.442,14.42-31.51   S56.866,48.753,56.866,49.821z"}]},
    "awesome": {"parts":[{"attrs":{"fill":"#9500DF"},"path":"M22.678,78.255c-8.847-13.673-8.311-38.07-5.362-53.083C23.214-5.927,66.914-0.297,89.434,4.796   c15.55,3.485,32.976,7.507,47.989,13.673c4.558,2.145,8.579,5.898,13.137,7.775c5.362,2.413,10.724-0.804,16.354-1.34   c4.825-0.804,11.26-1.609,13.404,3.485c1.877,4.289,1.341,10.724,1.608,15.549c0.269,6.703-5.63,17.158-11.796,19.571"},{"attrs":{},"path":"M23.644,77.996c-5.995-9.71-7.256-21.555-7.297-32.74c-0.036-9.838,0.483-21.502,5.729-30.147    C32.403-1.914,58.783,0.306,75.548,2.737c10.796,1.565,21.47,4.26,32.035,6.918c7.014,1.764,13.96,3.778,20.805,6.112    c3.797,1.294,7.631,2.647,11.1,4.677c2.952,1.728,5.654,3.815,8.666,5.455c4.004,2.181,7.96,1.746,12.212,0.763    c6.273-1.451,16.459-4.801,19.441,3.207c1.809,4.854,1.694,12.597,0.853,17.633c-1.025,6.133-5.386,13.202-11.099,15.829    c-1.168,0.537,0.63,0.595,1.141,0.359c8.566-3.938,12.293-13.963,12.105-22.779c-0.104-4.91,0.397-10.756-2.855-14.82    c-2.307-2.882-7.393-2.305-10.554-1.952c-2.559,0.286-5.083,0.776-7.582,1.388c-6.794,1.664-10.632,0.696-16.203-2.936    c-6.112-3.985-12.114-6.481-19.05-8.774c-12.986-4.293-26.449-7.381-39.828-10.18C70.782,0.301,53.139-1.75,37.296,3.156    c-6.438,1.994-12.802,5.719-16.59,11.438c-5.384,8.128-5.899,18.759-6.242,28.232c-0.435,12.016,0.803,25.247,7.249,35.687    C22.042,79.048,23.852,78.333,23.644,77.996L23.644,77.996z"},{"attrs":{"fill":"#66FF3F"},"path":"M72.275,33.215c-5.63-3.217-13.405-3.753-19.571-2.413c-12.601,2.681-17.426,15.818-21.18,27.078   c-6.435,19.035-7.507,38.874-9.383,58.713c-2.413,25.737-4.826,51.206-5.094,77.212c0,5.094,0,9.919,0.804,15.014   c0.268,2.681,0,9.383,1.608,11.796c3.217,4.825,12.064,5.898,17.426,7.507c27.346,7.507,61.662,24.396,88.472,5.63   c6.702-4.826,10.456-10.992,13.673-18.23c4.826-10.724,8.848-21.984,12.064-32.977c5.094-18.23,7.507-37.533,10.188-56.031   c2.949-23.057,5.898-48.794,3.485-72.119c-0.536-6.166-0.804-8.311-5.897-12.064c-8.312-5.898-16.354-7.507-26.542-9.115   c-15.281-2.145-35.389-5.898-50.67-1.609"},{"attrs":{},"path":"M73.182,32.872c-8.228-4.283-18.926-4.422-27.09,0.124c-8.491,4.729-12.18,15.199-15.116,23.827    c-4.966,14.589-6.981,29.779-8.437,45.06c-1.453,15.25-2.876,30.508-4.121,45.777c-1.309,16.056-2.347,32.188-2.334,48.303    c0.005,6.197,0.746,12.307,1.062,18.482c0.241,4.7,1.39,8.052,5.915,10.126c4.584,2.101,9.601,2.992,14.436,4.341    c6.407,1.787,12.715,3.928,19.054,5.938c12.159,3.855,24.55,7.329,37.364,7.852c10.113,0.412,20.779-1.685,29.442-7.098    c11.345-7.088,16.19-18.529,20.963-30.533c11.597-29.167,15.833-60.366,19.478-91.358c1.755-14.924,2.998-29.924,2.792-44.962    c-0.089-6.491-0.277-13.256-1.489-19.648c-0.992-5.23-6.596-8.205-10.85-10.458c-10.61-5.617-23.91-6.335-35.598-7.898    c-12.264-1.64-24.984-2.653-37.087,0.51c-1.138,0.297-0.947,0.998,0.188,0.701c14.797-3.867,30.54-1.15,45.397,1.03    c6.684,0.981,13.358,1.943,19.8,4.045c5.713,1.864,13.698,5.534,15.954,11.602c2.057,5.53,1.523,12.978,1.712,18.783    c0.262,8.113-0.075,16.242-0.607,24.337c-1.057,16.067-3.256,32.044-5.551,47.972c-2.254,15.637-4.769,31.308-9.36,46.454    c-4.188,13.813-8.886,29.647-17.838,41.2c-10.262,13.242-28.312,15.682-43.861,13.832c-13.611-1.62-26.724-6.375-39.721-10.498    c-7.212-2.288-14.888-3.648-21.916-6.429c-8.408-3.325-6.974-13.832-7.551-21.372c-0.875-11.424,0.051-23.162,0.671-34.58    c0.629-11.569,1.591-23.119,2.623-34.658c1.992-22.303,2.935-45.17,8.331-66.973c2.08-8.403,4.894-17.113,9.239-24.642    c6.622-11.471,20.71-14.533,32.296-8.502C71.894,33.831,73.499,33.037,73.182,32.872L73.182,32.872z"},{"attrs":{},"path":"M50.664,148.343c-1.378,17.317-6.672,43.041,8.433,56.054c10.121,8.719,26.458,7.859,38.226,3.498   c5.403-2.003,11.976-4.229,13.296-10.428c1.061-4.981,1.753-9.969,3.346-14.828c1.113-3.396,4.928-7.71,4.203-11.558   c-0.423-2.248-4.308-3.209-5.979-3.837c-5.063-1.902-10.113-3.83-15.222-5.609c-12.435-4.333-25.12-7.92-37.776-11.537   c-0.643-0.184-2.278,0.77-1.173,1.086c18.708,5.347,37.928,10.414,55.773,18.281c4.365,1.924,1.784,5.659,0.198,8.73   c-1.722,3.332-2.756,6.964-3.597,10.6c-0.829,3.583-1.177,7.3-2.187,10.835c-1.059,3.708-7.331,5.732-10.596,7.027   c-12.499,4.958-29.114,5.031-39.016-5.196c-5.45-5.63-6.725-13.866-7.389-21.333c-0.945-10.638,0.553-21.418,1.396-32.014   C52.665,147.293,50.718,147.662,50.664,148.343L50.664,148.343z"},{"attrs":{},"path":"M61.92,152.078c-1.009,11.71-1.16,23.486-2.949,35.12c-0.135,0.878,1.827,0.571,1.944-0.193   c1.79-11.634,1.941-23.41,2.949-35.12C63.942,150.982,61.985,151.314,61.92,152.078L61.92,152.078z"},{"attrs":{},"path":"M91.138,131.416c-4.038,19.866-6.828,39.952-9.383,60.054c-0.124,0.969,1.846,0.693,1.954-0.156   c2.556-20.103,5.346-40.188,9.383-60.054C93.283,130.321,91.308,130.576,91.138,131.416L91.138,131.416z"},{"attrs":{},"path":"M98.119,157.334c-1.541,20.267-1.405,40.629-3.485,60.858c-0.022,0.215,1.875,0.041,1.932-0.518   c2.08-20.229,1.944-40.592,3.485-60.858C100.068,156.585,98.161,156.782,98.119,157.334L98.119,157.334z"},{"attrs":{},"path":"M50.037,171.669c13.511,3.678,26.553,8.915,39.849,13.277c10.458,3.431,20.471,9.504,31.842,8.729   c0.526-0.036,2.105-0.901,0.826-0.814c-11.387,0.775-21.843-5.652-32.331-9.093c-12.885-4.228-25.51-9.306-38.606-12.869   C51.158,170.773,49.446,171.509,50.037,171.669L50.037,171.669z"},{"attrs":{},"path":"M61.177,85.503C60.463,72.455,85.721,64.625,88.2,79.318c0.063,0.378,2.011-0.051,1.932-0.518   c-2.654-15.73-31.646-6.68-30.886,7.22C59.263,86.344,61.205,86.021,61.177,85.503L61.177,85.503z"},{"attrs":{},"path":"M111.052,84.332c0.043-6.296,7.948-22.863,16.068-18.023c5.881,3.506,5.363,15.202,6.388,21.052   c0.144,0.82,2.081,0.336,1.932-0.518c-1.247-7.124-0.703-21.476-10.302-22.756c-8.678-1.157-15.987,13.491-16.035,20.423   C109.096,85.461,111.046,85.122,111.052,84.332L111.052,84.332z"},{"attrs":{},"path":"M166.798,93.65c1.258-2.227,4.687-5.818,6.711-2.281c0.793,1.387,0.787,3.334,0.885,4.877   c0.116,1.832,0.169,3.669,0.167,5.505c-0.006,5.223-0.251,10.45-0.58,15.662c-0.204,3.227-1.938,34.667-8.157,33.361   c-0.491-0.104-2.194,0.677-1.572,0.807c4.568,0.96,6.582-4.007,7.712-7.502c2.698-8.345,3.272-17.513,3.884-26.208   c0.469-6.66,0.931-13.462,0.562-20.141c-0.211-3.806,0.029-8.934-4.858-9.187c-3.066-0.159-5.362,3.108-6.666,5.417   C164.688,94.308,166.506,94.166,166.798,93.65L166.798,93.65z"},{"attrs":{},"path":"M22.248,96.927c-8.74,0.936-12.919,10.036-14.181,17.794c-1.393,8.562,5.853,10.81,12.896,10.545   c1.039-0.039,1.537-1.312,0.212-1.262c-6.789,0.254-11.881-1.94-11.163-9.473c0.62-6.495,4.771-15.567,12.023-16.344   C23.054,98.08,23.575,96.785,22.248,96.927L22.248,96.927z"},{"attrs":{"fill":"#FFEE00"},"path":"M116.627,16.746c-3.194,6.413-8.452,12.081-10.456,19.035c-0.146,0.509,1.759,0.234,1.914-0.307   c2.004-6.953,7.262-12.622,10.456-19.035C118.736,16.047,116.891,16.217,116.627,16.746L116.627,16.746z"},{"attrs":{"fill":"#FFEE00"},"path":"M126.802,24.205c-1.634,4.737-3.891,9.256-4.826,14.209c-0.149,0.79,1.285,0.41,1.583,0.233   c1.1-0.653,1.938-1.413,2.707-2.433c0.565-0.748-1.398-0.652-1.814-0.102c-0.541,0.806-1.247,1.425-2.119,1.857   c0.528,0.078,1.056,0.155,1.583,0.233c0.936-4.953,3.193-9.473,4.826-14.209C128.996,23.255,127.044,23.502,126.802,24.205   L126.802,24.205z"},{"attrs":{"fill":"#FFEE00"},"path":"M148.521,17.783c-2.199,7.222-5.038,14.226-7.238,21.448c-0.212,0.697,1.731,0.425,1.934-0.237   c2.199-7.222,5.038-14.226,7.238-21.447C150.666,16.85,148.723,17.121,148.521,17.783L148.521,17.783z"}]},
    "lisa": {"parts":[{"attrs":{"fill":"#FADEC0"},"path":"M47.115,84.757c0,0,2.111,20.586,3.959,25.601s6.334,14.516,9.501,19.002   c3.167,4.487,10.293,12.934,13.724,16.101c0,0,5.015,10.029,10.557,12.668c5.542,2.64,9.237,1.318,13.196,0   c3.958-1.32,3.43-1.849,7.39-5.016c0,0,10.292-5.014,20.058-15.57c9.765-10.557,10.558-14.78,11.085-20.586   c0.528-5.806,0.791-10.557,2.111-13.988c1.318-3.431,8.445-30.615,8.445-30.615l-26.92-50.409H77.73L44.74,58.893L47.115,84.757z"},{"attrs":{"fill":"#FEEC92","stroke-width":"1"},"path":"M88.003,159.269c0,0,8.729,12.847,7.938,23.403   c-0.792,10.558-0.04,21.379-7.938,30.878c-7.898,9.502,0,1.056,0,1.056s-5.787,32.219-13.177,34.311c0,0,3.695-2.902,0-7.125   c0,0,1.583,4.223-5.806,4.751c0,0,3.167-2.377,0-11.878c0,0-0.792,8.711-14.252,6.334c0,0,9.237-2.111,9.237-8.708   c0-6.6-0.264-1.321-0.264-1.321s-1.056,5.279-3.431,3.96c0,0-5.278-5.278-6.862-7.39c0,0-6.862-5.543-2.375,7.918   c0,0-19.794-32.462-20.058-53.576c-0.264-21.113,2.903-73.107,2.111-81.816c-0.792-8.709-6.07-44.075,14.516-66.772   C68.229,10.595,78.786-0.226,93.565,6.108c0,0,8.444-6.745,22.696-1.789c14.252,4.956,31.671,24.223,38.798,45.336   c7.125,21.114,13.459,73.898,16.626,87.622c3.168,13.724,13.196,60.967,13.462,63.078c0.263,2.112-1.584,25.072-1.584,29.03   c0,0-3.534-31.805-7.168-37.425c-0.338-0.522-0.676-0.82-1.015-0.844c-3.958-0.263-4.485,43.038-11.876,51.465   c0,0,5.014-22.697,1.319-25.864c0,0-1.319,17.946-7.653,25.073c0,0,1.319-23.226-3.694-15.572c0,0-2.904,16.891-9.238,19.795   c-6.335,2.902-5.014,1.056-5.014,1.056s5.541-11.085,1.056-9.501c0,0-4.751,8.708-7.391,10.029c0,0,5.279-10.558,1.319-7.127   c-3.958,3.432-10.292,6.599-10.292,6.599s24.809-18.739,17.946-31.671c0,0-3.432-76.272-5.278-75.217c0,0,4.485-45.66-0.265-55.953   c-4.751-10.293-3.167-16.891-7.653-19.794c0,0-0.137,11.583,4.223,17.155c0,0-8.71-12.668-8.973-20.586   c0,0-0.266,18.738,5.014,23.489c0,0-20.059-11.612-22.961-34.837c0,0-3.167-8.709-7.127-10.821   c-3.958-2.111-6.597-4.487-6.597-4.487s-1.319,32.198-19.794,44.075c0,0,11.612-16.363,7.917-15.308   c0,0-9.765,15.043-12.141,16.099c0,0,5.015-9.237,6.07-15.571c0,0-6.862,12.14-11.876,15.308c0,0,4.487-10.029,3.959-11.349   c-0.528-1.319-10.969,18.827-18.021,27.756c0,0,0.375,15.012,4.562,21.598c4.187,6.586,11.045,17.553,16.211,23.029   s3.065,1.808,5.166,5.476c2.102,3.668,0,0,0,0S80.442,159.615,88.003,159.269z"}]},
    "plaxis": { parts: [{ path:"M31.5,127.5c0,0,1.5,25.5,3,29s8,10,10,11s5.5,20,10,27s11.5,20,12.5,23S78.5,239,82,242 s14,9,30,4.5s27.5-19.5,31-24.5s18.5-42,20.5-61v-3.5c0,0,5,5,10,1s13.5-35,10-45s-7-15.5-9-16S148,51.355,148,51.355L72.5,42.5 L26.855,75.538L31.5,127.5z",attrs: {fill: "#FADEC0"}},{path:"M38.5,143c0,0-7-44.5-4-47S45,88.5,52,78.5S57.5,64,57.5,64s17,1,15.5,4S63,82,60,82s-4,2.5-4,2.5 s5,13,29-0.5c0,0,5.5-2.649,9.5-8.825c0,0,1.5,25.325,20.5,21.325s0-1.5,0-1.5s-17.322-11.149-9.411-19.825 c0,0,10.411,23.325,21.411,8.325c0,0-28.5-17.5-17-19.5c0,0,25.092,19.667,39.5,18h5c0,0,2,19,5.5,21.5s1,27,5.5,30 c0,0,12-40.5,14-45s9.5-10.5,9-24.5S174,39.5,172,35.5s-26.5-26.5-43.5-25c0,0-23-16.144-54-0.072c0,0-34.495,18.572-40.748,32.072 c0,0-23.287,26.933-9.752,60.5L38.5,143z",attrs: {fill: "#121212"}}]},
    "jpoz": {parts: [{path:"M34.599,139.263l-6.335-5.543c0,0-3.167,8.712,0,19.006 c3.168,10.296,2.552,16.632,2.464,21.384c-0.088,4.752,7.832,11.087,10.207,10.295c0,0,0,22.175,13.464,37.223 c13.463,15.048,16.631,22.967,30.094,26.135c13.464,3.168,29.303,1.584,38.807-4.752c9.504-6.335,30.095-22.966,32.471-31.679 c2.375-8.711,3.959-24.55,3.959-27.718c0,0,7.92,2.376,10.296-7.92c2.375-10.295-3.168-13.464,0-19.799 c3.167-6.336,8.712-17.423,4.753-18.215c-3.962-0.792-7.921-3.96-7.921-3.96l3.959-41.183l-30.095-31.678l-54.645-9.504 L40.935,71.155l-8.711,38.014L34.599,139.263z",attrs: {fill: "#FADEC0"}},{path:"M89.803,2.376c0,0-9.503,8.711-12.672,11.879c-3.167,3.167-13.463,4.752-13.463,4.752 s-7.127,5.543-9.504,10.295c-2.375,4.752-16.631,12.671-17.423,15.839c-0.792,3.168,3.96,6.335,0,8.711 c-3.959,2.376-12.319,11.88-10.12,20.591c2.2,8.712,1.672,46.595,6.82,57.022c0,0,0.66,8.977,0.792,9.899 c0.131,0.924,3.695,8.579,4.62,8.976c0.923,0.396,0.659-12.671,0.792-15.442c0.132-2.772-2.508-45.803,2.112-51.478 c4.619-5.677-1.452-20.724,39.202-24.42c0,0,35.109-2.244,41.974-0.66c6.862,1.584,22.835,7.127,24.815,11.748 c1.979,4.62,11.217,9.9,13.463,13.2c2.243,3.299,1.318,6.995,1.979,14.386c0.66,7.393,1.057,15.312,0.791,19.007 c-0.263,3.697,0.083,33.667,0.083,33.667s4.845-0.397,4.934-19.147c0-0.175,0-0.351,0-0.527c0,0,3.564-1.058,3.827-10.825 c0.266-9.766,9.901-33.394-4.355-60.981c0,0-3.959-17.818-15.97-24.022c0,0-2.642-6.731-10.693-8.052c0,0-9.504-3.299-7.392-7.919 c0,0-3.827,0-1.847-1.584c0,0-5.147-2.376-0.396-3.564c0,0,2.112-1.98-9.768-1.716c-11.88,0.265-8.71-1.188-6.468-0.924 c0,0-2.902-0.66,0.396-2.112c3.299-1.452,6.205-2.507-1.98-4.091C106.17,3.3,98.91,6.6,100.626,5.016 C102.341,3.432,97.59,0,98.514,0c0.924,0-5.939,5.148-7.656,5.412S89.803,2.376,89.803,2.376z",attrs: {fill: "#121212"}}]}
  }
  
  Raphael.fn.makeELCFace = function(key, x1, y1, width, height) {
    var self = this;
    var employee = faces[key];
    var st = self.set();
    
    for (var i in employee.parts) {
      var part = employee.parts[i];
      st.push(self.path(part.path).attr(part.attrs));
    }
    
    var d = st.getBBox();
    var xscale = (width/d.width);
    var yscale = (height/d.height);
    
    var active_scale = (xscale > yscale) ? yscale : xscale;
    
    st.scale(active_scale, active_scale, d.width/2, d.height/2)
    d = st.getBBox();
    
    st.translate(x1-d.x, y1-d.y);
    
    return st;
  }
  
  
  for(var usrnm in faces) {
    Raphael.fn[usrnm] = new Function("x1","y1","width","height","this.makeELCFace('"+usrnm+"',x1, y1, width, height);")
  }
})();