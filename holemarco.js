function getpin(el) {
	let course = checkValidInput(document.getElementById('course').value);
	let hole = checkValidInput(document.getElementById('coursehole').value);

	document.getElementById('pin1').value = "";
	document.getElementById('pin2').value = "";
	document.getElementById('pin3').value = "";	
	
	switch (course) {
		case 1: // Blue Lagoon
			switch (hole) {
				case 1:
					document.getElementById('pin1').value = "415.96 # -0.700 # 0.00";
					document.getElementById('pin2').value = "417.11 # -0.560 # 0.00";
					document.getElementById('pin3').value = "425.17 # -0.980 # 0.00";
					break;
				case 2:
					document.getElementById('pin1').value = "224.42 # -3.410 # 0.02";
					document.getElementById('pin2').value = "227.73 # -3.650 # 0.02";
					document.getElementById('pin3').value = "230.83 # -3.100 # 0.02";
					break;
				case 3:
					document.getElementById('pin1').value = "368.39 # 0.1500 # 0.00";
					document.getElementById('pin2').value = "371.59 # 0.3300 # 0.00";
					document.getElementById('pin3').value = "381.11 # 0.2700 # 0.00";
					break;
				case 4:
					document.getElementById('pin1').value = "369.28 # -3.040 # -0.13";
					document.getElementById('pin2').value = "370.70 # -3.250 # -0.13";
					document.getElementById('pin3').value = "375.35 # -3.460 # -0.13";
					break;
				case 6:
					document.getElementById('pin1').value = "214.57 # -2.200 # 0.00";
					document.getElementById('pin2').value = "215.62 # -2.640 # 0.00";
					document.getElementById('pin3').value = "226.19 # -2.500 # 0.00";
					break;
				case 9:
					document.getElementById('pin1').value = "382.66 # 0.3000 # 0.00";
					document.getElementById('pin2').value = "382.55 # 0.3500 # 0.00";
					document.getElementById('pin3').value = "388.47 # 0.2400 # 0.00";
					break;
				case 10:
					document.getElementById('pin1').value = "282.84 # -2.970 # -0.02";
					document.getElementById('pin2').value = "289.15 # -2.670 # -0.02";
					document.getElementById('pin3').value = "291.40 # -2.480 # -0.02";
					break;
				case 11:
					document.getElementById('pin1').value = "356.13 # -6.270 # 0.00";
					document.getElementById('pin2').value = "357.19 # -6.120 # 0.00";
					document.getElementById('pin3').value = "363.84 # -5.940 # 0.00";
					break;
				case 15:
					document.getElementById('pin1').value = "260.73 # -0.050 # -0.01";
					document.getElementById('pin2').value = "270.15 # -0.050 # -0.01";
					document.getElementById('pin3').value = "278.52 # -0.040 # -0.01";
					break;
				case 16:
					document.getElementById('pin1').value = "219.50 # -6.250 # 0.00";
					document.getElementById('pin2').value = "231.41 # -5.520 # 0.00";
					document.getElementById('pin3').value = "236.45 # -5.410 # 0.00";
					break;
				case 17:
					document.getElementById('pin1').value = "416.00 # -24.25 # 0.00";
					document.getElementById('pin2').value = "417.06 # -24.36 # 0.00";
					document.getElementById('pin3').value = "438.75 # -24.84 # 0.00";
					break;
				default:
					document.getElementById('pin1').value = "No Data";
					document.getElementById('pin2').value = "No Data";
					document.getElementById('pin3').value = "No Data";
			}
			break;

		case 2: // Ice Spa
			switch (hole) {
				case 1:
					document.getElementById('pin1').value = "377.61 # -27.21 # 0.00";
					document.getElementById('pin2').value = "381.43 # -27.44 # 0.00";
					document.getElementById('pin3').value = ""
					break;
				case 2:
					document.getElementById('pin1').value = "231.68 # -7.530 # 0.00";
					document.getElementById('pin2').value = "236.09 # -7.540 # 0.00";
					document.getElementById('pin3').value = "239.41 # -7.550 # 0.00";
					break;
				case 4:
					document.getElementById('pin1').value = "344.51 # -20.59 # 0.00";
					document.getElementById('pin2').value = "351.88 # -20.73 # 0.00";
					document.getElementById('pin3').value = "353.45 # -20.37 # 0.00";
					break;
				case 5:
					document.getElementById('pin1').value = "275.00 # -17.52 # 0.00";
					document.getElementById('pin2').value = "282.42 # -17.53 # 0.00";
					document.getElementById('pin3').value = "284.11 # -17.52 # 0.00";
					break;
				case 6:
					document.getElementById('pin1').value = "233.47 # -12.31 # -0.02";
					document.getElementById('pin2').value = "238.91 # -11.85 # -0.01";
					document.getElementById('pin3').value = "239.62 # -12.06 # -0.02";
					break;
				case 7:
					document.getElementById('pin1').value = "369.75 # 0.6400 # 0.00";
					document.getElementById('pin2').value = "378.87 # 0.9300 # 0.00";
					document.getElementById('pin3').value = "384.34 # 0.8400 # 0.00";
					break;
				case 8:
					document.getElementById('pin1').value = "371.64 # -71.33 # 0.00";
					document.getElementById('pin2').value = "379.19 # -71.28 # 0.00";
					document.getElementById('pin3').value = "381.35 # -71.11 # 0.00";
					break;
				case 9:
					document.getElementById('pin1').value = "263.86 # -9.660 # 0.01";
					document.getElementById('pin2').value = "268.14 # -9.760 # 0.00";
					document.getElementById('pin3').value = "269.70 # -9.740 # 0.00";
					break;
				case 10:
					document.getElementById('pin1').value = "232.03 # -19.40 # 0.00";
					document.getElementById('pin2').value = "233.84 # -19.40 # 0.00";
					document.getElementById('pin3').value = ""
					break;
				case 11:
					document.getElementById('pin1').value = "303.43 # -20.42 # 0.00";
					document.getElementById('pin2').value = "310.14 # -20.09 # 0.00";
					document.getElementById('pin3').value = ""
					break;
				case 13:
					document.getElementById('pin1').value = "385.29 # -42.64 # 0.00";
					document.getElementById('pin2').value = "389.75 # -42.36 # 0.00";
					document.getElementById('pin3').value = ""
					break;
				case 14:
					document.getElementById('pin1').value = "230.01 # -13.76 # 0.16";
					document.getElementById('pin2').value = "237.76 # -13.80 # 0.16";
					document.getElementById('pin3').value = "241.21 # -13.93 # 0.17";
					break;
				case 15:
					document.getElementById('pin1').value = "233.16 # -2.510 # -0.05";
					document.getElementById('pin2').value = "236.88 # -2.800 # -0.05";
					document.getElementById('pin3').value = "238.65 # -2.580 # -0.05";
					break;
				case 16:
					document.getElementById('pin1').value = "349.46 # -13.83 # 0.00";
					document.getElementById('pin2').value = "352.17 # -14.05 # 0.00";
					document.getElementById('pin3').value = "353.94 # -13.80 # 0.00";
					break;
				case 17:
					document.getElementById('pin1').value = "317.83 # -43.69 # 0.01";
					document.getElementById('pin2').value = "326.45 # -43.62 # 0.01";
					document.getElementById('pin3').value = ""
					break;
				default:
					document.getElementById('pin1').value = "No Data";
					document.getElementById('pin2').value = "No Data";
					document.getElementById('pin3').value = "No Data";
			}
			break;
		case 3: // Lost Seaway
			switch (hole) {
				case 1:
					document.getElementById('pin1').value = "359.98 # -0.710 # 0.00";
					document.getElementById('pin2').value = "360.56 # -0.640 # 0.00";
					document.getElementById('pin3').value = "369.01 # -0.430 # 0.00";
					break;
				case 2:
					document.getElementById('pin1').value = "229.53 # 0.2300 # 0.00";
					document.getElementById('pin2').value = "234.19 # 0.3800 # 0.00";
					document.getElementById('pin3').value = "256.34 # 0.4700 # 0.00";
					break;
				case 4:
					document.getElementById('pin1').value = "403.09 # -11.47 # 0.00";
					document.getElementById('pin2').value = "404.01 # -11.44 # 0.00";
					document.getElementById('pin3').value = "410.88 # -11.47 # 0.00";
					break;
				case 5:
					document.getElementById('pin1').value = "323.78 # -7.070 # 0.00";
					document.getElementById('pin2').value = "333.00 # -7.000 # 0.00";
					document.getElementById('pin3').value = "339.32 # -6.790 # 0.00";
					break;
				case 7:
					document.getElementById('pin1').value = "384.71 # -15.71 # 0.00";
					document.getElementById('pin2').value = "390.01 # -15.49 # 0.00";
					document.getElementById('pin3').value = "397.29 # -15.27 # 0.00";
					break;
				case 8:
					document.getElementById('pin1').value = "302.33 # -13.08 # 0.00";
					document.getElementById('pin2').value = "306.60 # -13.09 # 0.00";
					document.getElementById('pin3').value = "314.40 # -13.18 # 0.00";
					break;
				case 9:
					document.getElementById('pin1').value = "387.74 # -19.19 # 0.00";
					document.getElementById('pin2').value = "397.53 # -19.49 # 0.00";
					document.getElementById('pin3').value = "402.93 # -19.64 # 0.00";
					break;
				case 10:
					document.getElementById('pin1').value = "229.94 # -11.90 # 0.00";
					document.getElementById('pin2').value = "239.41 # -11.79 # 0.00";
					document.getElementById('pin3').value = "247.29 # -11.53 # 0.00";
					break;
				case 11:
					document.getElementById('pin1').value = "349.49 # -14.23 # 0.00";
					document.getElementById('pin2').value = "355.87 # -14.23 # 0.00";
					document.getElementById('pin3').value = "362.53 # -14.23 # 0.00";
					break;
				case 13:
					document.getElementById('pin1').value = "286.98 # -13.89 # 0.00";
					document.getElementById('pin2').value = "293.22 # -14.11 # 0.00";
					document.getElementById('pin3').value = "299.95 # -14.10 # 0.00";
					break;
				case 14:
					document.getElementById('pin1').value = "205.80 # -11.70 # 0.00";
					document.getElementById('pin2').value = "216.75 # -11.77 # 0.00";
					document.getElementById('pin3').value = "225.28 # -11.62 # 0.00";
					break;
				case 16:
					document.getElementById('pin1').value = "371.91 # 2.4800 # 0.00";
					document.getElementById('pin2').value = "373.92 # 2.4600 # 0.00";
					document.getElementById('pin3').value = "388.54 # 2.6900 # 0.00";
					break;
				case 17:
					document.getElementById('pin1').value = "256.85 # -21.48 # 0.00";
					document.getElementById('pin2').value = "259.92 # -21.42 # 0.00";
					document.getElementById('pin3').value = "272.30 # -21.11 # 0.00";
					break;
				default:
					document.getElementById('pin1').value = "No Data";
					document.getElementById('pin2').value = "No Data";
					document.getElementById('pin3').value = "No Data";
			}
			break;
		case 4: // Pink Wind
			switch (hole) {
				case 1:
					document.getElementById('pin1').value = "337.78 # -3.440 # 0.00"
					document.getElementById('pin2').value = "352.11 # -3.360 # 0.00"
					document.getElementById('pin3').value = "356.74 # -3.370 # 0.00"
					break;
				case 2:
					document.getElementById('pin1').value = "211.21 # -2.760 # -0.08"
					document.getElementById('pin2').value = "223.29 # -2.660 # -0.08"
					document.getElementById('pin3').value = "231.31 # -2.330 # -0.08"
					break;
				case 3:
					document.getElementById('pin1').value = "364.78 # -2.100 # -0.07"
					document.getElementById('pin2').value = "373.38 # -2.100 # -0.07"
					document.getElementById('pin3').value = "377.85 # -2.100 # -0.07"
					break;
				case 4:
					document.getElementById('pin1').value = "323.50 # -8.820 # 0.04"
					document.getElementById('pin2').value = "326.78 # -8.820 # 0.04"
					document.getElementById('pin3').value = "330.02 # -8.820 # 0.04"
					break;
				case 5:
					document.getElementById('pin1').value = "360.27 # -6.130 # -0.10"
					document.getElementById('pin2').value = "375.50 # -6.060 # -0.09"
					document.getElementById('pin3').value = "377.44 # -6.030 # -0.08"
					break;
				case 6:
					document.getElementById('pin1').value = "230.46 # 6.6500 # 0.00"
					document.getElementById('pin2').value = "238.15 # 6.9700 # 0.00"
					document.getElementById('pin3').value = "240.10 # 6.9300 # 0.00"
					break;
				case 8:
					document.getElementById('pin1').value = "386.90 # -2.670 # 0.00"
					document.getElementById('pin2').value = "395.90 # -2.620 # 0.00"
					document.getElementById('pin3').value = "399.30 # -2.380 # 0.00"
					break;
				case 9:
					document.getElementById('pin1').value = "347.43 #	5.0800 # 0.00"
					document.getElementById('pin2').value = "356.57 #	5.0800 # 0.00"
					document.getElementById('pin3').value = "360.81 #	5.0800 # 0.00"
					break;
				case 10:
					document.getElementById('pin1').value = "379.19 #	-1.620 # 0.04"
					document.getElementById('pin2').value = "389.45 #	-1.610 # 0.04"
					document.getElementById('pin3').value = "395.31 #	-1.470 # 0.05"
					break;
				case 11:
					document.getElementById('pin1').value = "378.60 #	-1.850 # 0.00"
					document.getElementById('pin2').value = "387.95 #	-1.810 # 0.00"
					document.getElementById('pin3').value = "394.71 #	-1.840 # 0.00"
					break;
				case 12:
					document.getElementById('pin1').value = "235.27 #	-1.290 # 0.00"
					document.getElementById('pin2').value = "240.98 #	-1.360 # 0.00"
					document.getElementById('pin3').value = "244.06 #	-1.390 # 0.00"
					break;
				case 15:
					document.getElementById('pin1').value = "362.52 #	-9.220 # 0.04"
					document.getElementById('pin2').value = "371.11 #	-9.220 # 0.04"
					document.getElementById('pin3').value = "375.10 #	-9.220 # 0.04"
					break;
				case 16:
					document.getElementById('pin1').value = "227.81 #	15.800 # -0.17"
					document.getElementById('pin2').value = "236.86 #	15.610 # -0.17"
					document.getElementById('pin3').value = "237.14 #	15.590 # -0.18"
					break;
				case 17:
					document.getElementById('pin1').value = "386.10 #	-35.30 # 0.00"
					document.getElementById('pin2').value = "399.98 #	-36.00 # 0.00"
					document.getElementById('pin3').value = "410.50 #	-36.80 # 0.00"
					break;
				default:
					document.getElementById('pin1').value = "No Data";
					document.getElementById('pin2').value = "No Data";
					document.getElementById('pin3').value = "No Data";
			}
			break;
		case 5: // west wiz 
			switch (hole) {
				case 1:
					document.getElementById('pin1').value = "368.50 #	-7.980 # 0.00"
					document.getElementById('pin2').value = "371.48 #	-7.870 # 0.00"
					document.getElementById('pin3').value = "380.60 #	-8.000 # 0.00"
					break;
				case 2:
					document.getElementById('pin1').value = "207.44 #	-3.010 # 0.00"
					document.getElementById('pin2').value = "211.23 #	-2.920 # 0.00"
					document.getElementById('pin3').value = "220.86 #	-2.690 # 0.00"
					break;
				case 6:
					document.getElementById('pin1').value = "212.44 #	-5.000 # 0.00"
					document.getElementById('pin2').value = "215.47 #	-4.930 # 0.00"
					document.getElementById('pin3').value = "242.43 #	-4.710 # 0.00"
					break;
				case 8:
					document.getElementById('pin1').value = "360.30 #	-3.560 # 0.00"
					document.getElementById('pin2').value = "381.10 #	-3.910 # 0.00"
					document.getElementById('pin3').value = "390.25 #	-4.120 # 0.00"
					break;
				case 10:
					document.getElementById('pin1').value = "360.50 #	-7.010 # 0.00"
					document.getElementById('pin2').value = "374.04 #	-7.090 # 0.00"
					document.getElementById('pin3').value = "379.34 #	-6.780 # 0.00"
					break;
				case 11:
					document.getElementById('pin1').value = "319.96 #	-13.10 # 0.00"
					document.getElementById('pin2').value = "323.54 #	-12.80 # 0.00"
					document.getElementById('pin3').value = "344.95 #	-12.80 # 0.00"
					break;
				case 14:
					document.getElementById('pin1').value = "199.41 #	14.400 # 0.00"
					document.getElementById('pin2').value = "199.55 #	14.600 # 0.00"
					document.getElementById('pin3').value = "205.69 #	14.500 # 0.00"
					break;
				case 16:
					document.getElementById('pin1').value = "209.00 #	-8.360 # 0.00"
					document.getElementById('pin2').value = "218.86 #	-8.470 # 0.00"
					document.getElementById('pin3').value = "234.53 #	-8.550 # 0.00"
					break;
				case 18:
					document.getElementById('pin1').value = "331.60 #	-4.930 # 0.00"
					document.getElementById('pin2').value = "340.90 #	-5.000 # 0.00"
					document.getElementById('pin3').value = "356.24 #	-4.900 # 0.00"
					break;
				default:
					document.getElementById('pin1').value = "No Data";
					document.getElementById('pin2').value = "No Data";
					document.getElementById('pin3').value = "No Data";
			}
			break;
		case 6: // Abbot Mine
			switch (hole) {
				case 2:
					document.getElementById('pin1').value = "244.79 #	-13.00 # -0.11"
					document.getElementById('pin2').value = "247.90 #	-12.90 # -0.11"
					document.getElementById('pin3').value = ""
					break;
				case 6:
					document.getElementById('pin1').value = "229.82 #	7.2600 # 0.11"
					document.getElementById('pin2').value = "238.24 #	7.7600 # 0.10"
					document.getElementById('pin3').value = ""
					break;
				case 7:
					document.getElementById('pin1').value = "244.90 #	-54.30 # 0.08"
					document.getElementById('pin2').value = "246.70 #	-54.60 # 0.09"
					document.getElementById('pin3').value = ""
					break;
				case 8:
					document.getElementById('pin1').value = "327.00 #	-35.95 # -0.07"
					document.getElementById('pin2').value = "332.65 #	-36.25 # -0.07"
					document.getElementById('pin3').value = ""
					break;
				case 10:
					document.getElementById('pin1').value = "227.96 #	-5.360 # 0.02"
					document.getElementById('pin2').value = "237.35 #	-5.190 # 0.02"
					document.getElementById('pin3').value = "240.90 #	-5.320 # 0.02"
					break;
				case 13:
					document.getElementById('pin1').value = "336.10 #	-3.310 # 0.00"
					document.getElementById('pin2').value = "347.05 #	-3.640 # 0.00"
					document.getElementById('pin3').value = ""
					break;
				case 14:
					document.getElementById('pin1').value = "373.62 #	-19.31 # 0.10"
					document.getElementById('pin2').value = "379.32 #	-19.56 # 0.10"
					document.getElementById('pin3').value = ""
					break;
				case 15:
					document.getElementById('pin1').value = "294.89 #	-19.31 # -0.11"
					document.getElementById('pin2').value = "302.82 #	-19.32 # -0.10"
					document.getElementById('pin3').value = ""
					break;
				case 16:
					document.getElementById('pin1').value = "185.02 #	6.9300 # 0.06"
					document.getElementById('pin2').value = "211.56 #	6.7900 # 0.07"
					document.getElementById('pin3').value = "211.99 #	6.7600 # 0.07"
					break;
				case 17:
					document.getElementById('pin1').value = "370.22 #	-3.780 # 0.05"
					document.getElementById('pin2').value = "374.05 #	-3.730 # 0.04"
					document.getElementById('pin3').value = "383.61 #	-3.740 # 0.05"
					break;
				default:
					document.getElementById('pin1').value = "No Data";
					document.getElementById('pin2').value = "No Data";
					document.getElementById('pin3').value = "No Data";
			}
			break;
		case 7: // Eastern Valley
			switch (hole) {
				case 1:
					document.getElementById('pin1').value = "388.15 #	-14.50 # 0.00"
					document.getElementById('pin2').value = "395.58 #	-14.90 # 0.00"
					document.getElementById('pin3').value = "402.32 #	-14.80 # 0.00"
					break;
				case 3:
					document.getElementById('pin1').value = "198.09 #	-0.330 # 0.00"
					document.getElementById('pin2').value = "203.59 #	-0.340 # 0.00"
					document.getElementById('pin3').value = "203.54 #	-0.420 # 0.00"
					break;
				case 4:
					document.getElementById('pin1').value = "400.85 #	-0.680 # 0.00"
					document.getElementById('pin2').value = "406.86 #	-0.690 # 0.00"
					document.getElementById('pin3').value = "407.72 #	-0.680 # 0.00"
					break;
				case 5:
					document.getElementById('pin1').value = "366.03 #	-1.760 # 0.00"
					document.getElementById('pin2').value = "372.53 #	-1.760 # 0.00"
					document.getElementById('pin3').value = "373.43 #	-1.760 # 0.00"
					break;
				case 6:
					document.getElementById('pin1').value = "385.70 #	0.0900 # 0.00"
					document.getElementById('pin2').value = "388.60 #	0.1000 # 0.00"
					document.getElementById('pin3').value = "390.02 #	0.1000 # 0.00"
					break;
				case 8:
					document.getElementById('pin1').value = "257.73 #	-7.850 # 0.00"
					document.getElementById('pin2').value = "267.00 #	-8.030 # 0.00"
					document.getElementById('pin3').value = "268.69 #	-8.180 # 0.00"
					break;
				case 9:
					document.getElementById('pin1').value = "290.41 #	-1.660 # 0.00"
					document.getElementById('pin2').value = "294.12 #	-1.730 # 0.00"
					document.getElementById('pin3').value = "298.78 #	-1.730 # 0.00"
					break;
				case 10:
					document.getElementById('pin1').value = "223.98 #	1.0700 # -0.02"
					document.getElementById('pin2').value = "225.02 #	0.9900 # -0.02"
					document.getElementById('pin3').value = "233.44 #	0.9000 # -0.02"
					break;
				case 13:
					document.getElementById('pin1').value = "374.74 #	-14.40 # 0.00"
					document.getElementById('pin2').value = "384.73 #	-14.70 # 0.00"
					document.getElementById('pin3').value = "394.48 #	-15.10 # 0.00"
					break;
				case 14:
					document.getElementById('pin1').value = "370.72 #	-17.80 # 0.00"
					document.getElementById('pin2').value = "373.70 #	-17.80 # 0.00"
					document.getElementById('pin3').value = "380.03 #	-17.70 # 0.00"
					break;
				case 15:
					document.getElementById('pin1').value = "241.40 #	-13.50 # 0.00"
					document.getElementById('pin2').value = "248.90 #	-13.60 # 0.00"
					document.getElementById('pin3').value = "250.91 #	-13.58 # 0.00"
					break;
				case 16:
					document.getElementById('pin1').value = "380.30 #	-6.080 # 0.00"
					document.getElementById('pin2').value = "381.96 #	-6.180 # 0.00"
					document.getElementById('pin3').value = "384.01 #	-6.180 # 0.00"
					break;
				case 17:
					document.getElementById('pin1').value = "353.50 #	-1.250 # 0.00"
					document.getElementById('pin2').value = "358.35 #	-1.080 # 0.00"
					document.getElementById('pin3').value = "364.33 #	-1.210 # 0.00"
					break;
				case 18:
					document.getElementById('pin1').value = "342.80 #	-9.550 # 0.00"
					document.getElementById('pin2').value = "346.40 #	-9.450 # 0.00"
					document.getElementById('pin3').value = "347.29 #	-9.600 # 0.00"
					break;
				default:
					document.getElementById('pin1').value = "No Data";
					document.getElementById('pin2').value = "No Data";
					document.getElementById('pin3').value = "No Data";
			}
			break;
		case 8: // Ice cannon
			switch (hole) {
				case 2:
					document.getElementById('pin1').value = "181.14 # -0.300 # 0.04"
					document.getElementById('pin2').value = "197.80 # -1.330 # 0.02"
					document.getElementById('pin3').value = "201.70 # -0.880 # 0.05"
					break;
				case 3:
					document.getElementById('pin1').value = "347.28 # -16.49 # 0.15"
					document.getElementById('pin2').value = "357.19 # -16.88 # 0.14"
					document.getElementById('pin3').value = "370.46 # -16.71 # 0.15"
					break;
				case 6:
					document.getElementById('pin1').value = "364.21 # 6.7100 # 0.00"
					document.getElementById('pin2').value = "376.60 # 7.9100 # 0.00"
					document.getElementById('pin3').value = "376.58 # 7.1800 # 0.00"
					break;
				case 7:
					document.getElementById('pin1').value = "236.38 # -19.21 # 0.11"
					document.getElementById('pin2').value = "249.53 # -19.71 # 0.09"
					document.getElementById('pin3').value = "259.14 # -19.48 # 0.11"
					break;
				case 8:
					document.getElementById('pin1').value = "377.69 # -7.540 # 0.00"
					document.getElementById('pin2').value = "384.02 # -7.540 # 0.00"
					document.getElementById('pin3').value = "387.12 # -7.540 # 0.00"
					break;
				case 11:
					document.getElementById('pin1').value = "368.48 # -29.60 # 0.00"
					document.getElementById('pin2').value = "385.70 # -30.00 # 0.00"
					document.getElementById('pin3').value = "388.00 # -29.80 # 0.00"
					break;
				case 13:
					document.getElementById('pin1').value = "168.66 # -14.31 # 0.02"
					document.getElementById('pin2').value = "182.08 # -13.98 # 0.00"
					document.getElementById('pin3').value = "191.40 # -13.76 # 0.03"
					break;
				case 16:
					document.getElementById('pin1').value = "180.29 # -3.340 # 0.00"
					document.getElementById('pin2').value = "184.05 # -3.150 # 0.00"
					document.getElementById('pin3').value = "188.59 # -3.320 # 0.00"
					break;
				default:
					document.getElementById('pin1').value = "No Data";
					document.getElementById('pin2').value = "No Data";
					document.getElementById('pin3').value = "No Data";
			}
			break;

		case 9: // Shining Sand
			switch (hole) {
				case 2:
					document.getElementById('pin1').value = "230.51 #	-15.81 # 0.03"
					document.getElementById('pin2').value = "239.33 #	-16.00 # 0.03"
					document.getElementById('pin3').value = "247.55 #	-16.10 # 0.03"
					break;
				case 3:
					document.getElementById('pin1').value = "270.77 #	-3.090 # 0.00"
					document.getElementById('pin2').value = "279.27 #	-3.210 # 0.00"
					document.getElementById('pin3').value = "283.93 #	-3.400 # 0.00"
					break;
				case 6:
					document.getElementById('pin1').value = "228.11 #	-20.08 # 0.00"
					document.getElementById('pin2').value = "230.72 #	-20.05 # 0.00"
					document.getElementById('pin3').value = "237.55 #	-20.10 # 0.00"
					break;
				case 9:
					document.getElementById('pin1').value = "273.70 #	-20.70 # 0.00"
					document.getElementById('pin2').value = "283.64 #	-20.50 # 0.00"
					document.getElementById('pin3').value = "284.38 #	-20.73 # 0.00"
					break;
				case 10:
					document.getElementById('pin1').value = "226.43 #	-5.980 # 0.00"
					document.getElementById('pin2').value = "229.74 #	-5.990 # 0.00"
					document.getElementById('pin3').value = "233.28 #	-5.990 # 0.00"
					break;
				case 12:
					document.getElementById('pin1').value = "378.10 #	-26.60 # 0.00"
					document.getElementById('pin2').value = "386.60 #	-26.60 # 0.00"
					document.getElementById('pin3').value = "391.20 #	-26.60 # 0.00"
					break;
				case 15:
					document.getElementById('pin1').value = "354.40 #	-19.90 # 0.00"
					document.getElementById('pin2').value = "357.90 #	-20.00 # 0.00"
					document.getElementById('pin3').value = "364.04 #	-19.90 # 0.00"
					break;
				case 16:
					document.getElementById('pin1').value = "241.32 #	-11.00 # 0.00"
					document.getElementById('pin2').value = "242.06 #	-11.20 # 0.00"
					document.getElementById('pin3').value = "249.14 #	-11.10 # 0.00"
					break;
				case 17:
					document.getElementById('pin1').value = "366.30 #	-2.630 # 0.00"
					document.getElementById('pin2').value = "367.52 #	-2.420 # 0.00"
					document.getElementById('pin3').value = "375.84 #	-2.540 # 0.00"
					break;
				default:
					document.getElementById('pin1').value = "No Data";
					document.getElementById('pin2').value = "No Data";
					document.getElementById('pin3').value = "No Data";
			}
			break;
		case 10: // Wiz city
			switch (hole) {
				case 2:
					document.getElementById('pin1').value = "226.57 #	-10.80 # 0.00"
					document.getElementById('pin2').value = "235.68 #	-11.00 # 0.00"
					document.getElementById('pin3').value = "244.35 #	-11.10 # 0.00"
					break;
				case 6:
					document.getElementById('pin1').value = "240.70 #	-13.70 # 0.00"
					document.getElementById('pin2').value = "241.28 #	-13.70 # 0.00"
					document.getElementById('pin3').value = "255.61 #	-13.70 # 0.00"
					break;
				case 8:
					document.getElementById('pin1').value = "408.43 #	-40.20 # 0.00"
					document.getElementById('pin2').value = "420.65 #	-40.50 # 0.00"
					document.getElementById('pin3').value = "420.78 #	-40.50 # 0.00"
					break;
				case 9:
					document.getElementById('pin1').value = "347.44 #	5.0800 # 0.00"
					document.getElementById('pin2').value = "356.58 #	5.0500 # 0.00"
					document.getElementById('pin3').value = "360.82 #	5.0800 # 0.00"
					break;
				case 10:
					document.getElementById('pin1').value = "263.91 #	-33.60 # 0.00"
					document.getElementById('pin2').value = "279.55 #	-34.10 # 0.00"
					document.getElementById('pin3').value = "286.67 #	-34.60 # 0.00"
					break;
				case 13:
					document.getElementById('pin1').value = "223.05 #	-38.30 # 0.01"
					document.getElementById('pin2').value = "242.05 #	-38.50 # 0.01"
					document.getElementById('pin3').value = "248.08 #	-38.60 # 0.01"
					break;
				case 16:
					document.getElementById('pin1').value = "175.70 #	-15.40 # 0.00"
					document.getElementById('pin2').value = "185.40 #	-15.40 # 0.00"
					document.getElementById('pin3').value = "190.16 #	-15.40 # 0.00"
					break;
				case 17:
					document.getElementById('pin1').value = "386.10 #	-35.30 # 0.00"
					document.getElementById('pin2').value = "399.98 #	-36.00 # 0.00"
					document.getElementById('pin3').value = "410.50 #	-36.80 # 0.00"
					break;
				default:
					document.getElementById('pin1').value = "No Data";
					document.getElementById('pin2').value = "No Data";
					document.getElementById('pin3').value = "No Data";
			}
			break;
		case 11: // Blue Moon
			switch (hole) {
				case 1:
					document.getElementById('pin1').value = "377.24 #	-1.110 # 0.00"
					document.getElementById('pin2').value = "384.53 #	-1.440 # 0.00"
					document.getElementById('pin3').value = "401.45 #	-1.350 # 0.00"
					break;
				case 2:
					document.getElementById('pin1').value = "228.26 #	3.0100 # 0.00"
					document.getElementById('pin2').value = "231.38 #	3.4900 # 0.00"
					document.getElementById('pin3').value = "241.90 #	3.3200 # 0.00"
					break;
				case 3:
					document.getElementById('pin1').value = "375.03 #	4.5700 # 0.00"
					document.getElementById('pin2').value = "385.74 #	4.6800 # 0.00"
					document.getElementById('pin3').value = "393.65 #	4.7300 # 0.00"
					break;
				case 6:
					document.getElementById('pin1').value = "206.75 #	5.4700 # 0.00"
					document.getElementById('pin2').value = "209.96 #	5.8000 # 0.00"
					document.getElementById('pin3').value = "221.41 #	6.0900 # 0.00"
					break;
				case 10:
					document.getElementById('pin1').value = "220.89 #	5.8200 # 0.00"
					document.getElementById('pin2').value = "220.94 #	5.2400 # 0.00"
					document.getElementById('pin3').value = "236.11 #	5.8000 # 0.00"
					break;
				case 12:
					document.getElementById('pin1').value = "268.30 #	0.0600 # 0.00"
					document.getElementById('pin2').value = "268.95 #	0.0500 # 0.00"
					document.getElementById('pin3').value = "279.53 #	0.0400 # 0.00"
					break;
				case 13:
					document.getElementById('pin1').value = "384.80 #	-1.890 # 0.00"
					document.getElementById('pin2').value = "394.90 #	-1.840 # 0.00"
					document.getElementById('pin3').value = "396.27 #	-2.160 # 0.00"
					break;
				case 14:
					document.getElementById('pin1').value = "369.50 #	3.8300 # 0.00"
					document.getElementById('pin2').value = "383.82 #	4.5100 # 0.00"
					document.getElementById('pin3').value = "394.78 #	4.6900 # 0.00"
					break;
				case 16:
					document.getElementById('pin1').value = "265.25 #	2.2100 # 0.00"
					document.getElementById('pin2').value = "268.28 #	2.3800 # 0.00"
					document.getElementById('pin3').value = "285.13 #	2.7100 # 0.00"
					break;
				default:
					document.getElementById('pin1').value = "No Data";
					document.getElementById('pin2').value = "No Data";
					document.getElementById('pin3').value = "No Data";
			}
			break;
		case 12: // Blue Water
			switch (hole) {
				case 2:
					document.getElementById('pin1').value = "213.31 #	-3.480 # 0.01"
					document.getElementById('pin2').value = "227.83 #	-2.990 # 0.01"
					document.getElementById('pin3').value = "235.75 #	-2.960 # 0.01"
					break;
				case 3:
					document.getElementById('pin1').value = "378.74 #	-0.280 # 0.02"
					document.getElementById('pin2').value = "391.72 #	-0.060 # 0.02"
					document.getElementById('pin3').value = "398.29 #	-0.320 # 0.02"
					break;
				case 4:
					document.getElementById('pin1').value = "375.93 #	-2.940 # -0.25"
					document.getElementById('pin2').value = "379.04 #	-2.840 # -0.25"
					document.getElementById('pin3').value = "392.34 #	-2.320 # -0.25"
					break;
				case 6:
					document.getElementById('pin1').value = "234.51 #	-3.160 # -0.03"
					document.getElementById('pin2').value = "238.59 #	-3.530 # -0.02"
					document.getElementById('pin3').value = "242.58 #	-3.280 # -0.03"
					break;
				case 9:
					document.getElementById('pin1').value = "382.90 #	0.3300 # 0.00"
					document.getElementById('pin2').value = "395.43 #	0.2700 # 0.00"
					document.getElementById('pin3').value = "401.20 #	0.0500 # 0.00"
					break;
				case 10:
					document.getElementById('pin1').value = "292.15 #	-2.950 # -0.02"
					document.getElementById('pin2').value = "307.15 #	-2.170 # -0.02"
					document.getElementById('pin3').value = "310.38 #	-1.780 # -0.02"
					break;
				case 11:
					document.getElementById('pin1').value = "363.82 #	-6.390 # 0.00"
					document.getElementById('pin2').value = "370.61 #	-6.170 # 0.00"
					document.getElementById('pin3').value = "389.75 #	-6.450 # 0.00"
					break;
				case 13:
					document.getElementById('pin1').value = "424.24 #	-0.690 # 0.00"
					document.getElementById('pin2').value = "438.84 #	-1.110 # 0.00"
					document.getElementById('pin3').value = "440.96 #	-0.990 # 0.00"
					break;
				case 15:
					document.getElementById('pin1').value = "271.84 #	-0.060 # 0.00"
					document.getElementById('pin2').value = "283.21 #	-0.130 # 0.00"
					document.getElementById('pin3').value = "286.46 #	-0.030 # 0.00"
					break;
				case 16:
					document.getElementById('pin1').value = "227.30 # -5.850 # 0.00"
					document.getElementById('pin2').value = "236.12 #	-5.530 # 0.00"
					document.getElementById('pin3').value = "245.64 #	-5.210 # 0.00"
					break;
				default:
					document.getElementById('pin1').value = "No Data";
					document.getElementById('pin2').value = "No Data";
					document.getElementById('pin3').value = "No Data";
			}
			break;
		case 13: // Sepia Wind
			switch (hole) {
				case 1:
					document.getElementById('pin1').value = "406.87 #	-7.170 # 0.18"
					document.getElementById('pin2').value = "414.82 #	-7.770 # 0.17"
					document.getElementById('pin3').value = "415.42 #	-7.520 # 0.18"
					break;
				case 2:
					document.getElementById('pin1').value = "291.51 #	-7.200 # -0.10"
					document.getElementById('pin2').value = "299.36 #	-7.210 # -0.10"
					document.getElementById('pin3').value = "299.24 #	-7.530 # -0.10"
					break;
				case 3:
					document.getElementById('pin1').value = "414.23 #	-1.760 # -0.02"
					document.getElementById('pin2').value = "419.35 #	-1.400 # -0.02"
					document.getElementById('pin3').value = "433.89 #	-1.330 # -0.02"
					break;
				case 6:
					document.getElementById('pin1').value = "414.91 #	-6.020 # 0.00"
					document.getElementById('pin2').value = "428.74 #	-5.870 # 0.00"
					document.getElementById('pin3').value = "438.82 #	-6.210 # 0.00"
					break;
				case 7:
					document.getElementById('pin1').value = "231.21 #	-15.02 # 0.92"
					document.getElementById('pin2').value = "239.91 #	-14.51 # 0.85"
					document.getElementById('pin3').value = "244.67 #	-14.41 # 0.93"
					break;
				case 8:
					document.getElementById('pin1').value = "409.89 #	-7.170 # -0.32"
					document.getElementById('pin2').value = "421.46 #	-2.970 # -0.34"
					document.getElementById('pin3').value = "439.97 #	-2.940 # -0.33"
					break;
				case 10:
					document.getElementById('pin1').value = "384.20 #	6.4900 # -0.22"
					document.getElementById('pin2').value = "387.19 #	6.1400 # -0.06"
					document.getElementById('pin3').value = "398.31 #	6.1200 # -0.15"
					break;
				case 13:
					document.getElementById('pin1').value = "223.87 #	-13.89 # 0.05"
					document.getElementById('pin2').value = "227.37 #	-13.80 # 0.09"
					document.getElementById('pin3').value = "235.72 #	-13.91 # 0.07"
					break;
				case 14:
					document.getElementById('pin1').value = "353.66 #	-17.400 # 0.00"
					document.getElementById('pin2').value = "371.91 #	-17.600 # 0.00"
					document.getElementById('pin3').value = "383.61 #	-17.700 # 0.00"
					break;
				case 16:
					document.getElementById('pin1').value = "248.44 #	-5.630 # -0.01"
					document.getElementById('pin2').value = "255.20 #	-5.620 # -0.01"
					document.getElementById('pin3').value = "261.74 #	-5.590 # -0.01"
					break;
				case 18:
					document.getElementById('pin1').value = "385.15 #	-8.070 # 0.00"
					document.getElementById('pin2').value = "395.10 #	-8.220 # 0.00"
					document.getElementById('pin3').value = "401.97 #	-8.240 # 0.00"
					break;
				default:
					document.getElementById('pin1').value = "No Data";
					document.getElementById('pin2').value = "No Data";
					document.getElementById('pin3').value = "No Data";
			}
			break;
		case 14: // White Wiz
			switch (hole) {
				case 1:
					document.getElementById('pin1').value = "396.21 #	-14.00 # -0.01"
					document.getElementById('pin2').value = "406.47 #	-13.80 # -0.01"
					document.getElementById('pin3').value = "419.40 #	-13.50 # -0.01"
					break;
				case 2:
					document.getElementById('pin1').value = "167.71 #	-5.700 # 0.02"
					document.getElementById('pin2').value = "167.89 #	-5.580 # 0.02"
					document.getElementById('pin3').value = "180.53 #	-5.680 # 0.02"
					break;
				case 3:
					document.getElementById('pin1').value = "397.87 #	7.3900 # -0.02"
					document.getElementById('pin2').value = "403.38 #	7.3300 # -0.08"
					document.getElementById('pin3').value = "409.54 #	7.4700 # -0.03"
					break;
				case 5:
					document.getElementById('pin1').value = "414.30 #	-7.290 # 0.18"
					document.getElementById('pin2').value = "422.11 #	-7.720 # 0.18"
					document.getElementById('pin3').value = "427.47 #	-7.460 # 0.18"
					break;
				case 7:
					document.getElementById('pin1').value = "420.02 #	-7.060 # -0.01"
					document.getElementById('pin2').value = "424.05 #	-7.060 # -0.01"
					document.getElementById('pin3').value = "441.12 #	-7.160 # -0.01"
					break;
				case 9:
					document.getElementById('pin1').value = "230.61 #	-14.24 # 0.01"
					document.getElementById('pin2').value = "236.72 #	-14.16 # 0.00"
					document.getElementById('pin3').value = "237.32 #	-14.26 # 0.01"
					break;
				case 11:
					document.getElementById('pin1').value = "382.90 #	-4.190 # -0.02"
					document.getElementById('pin2').value = "391.73 #	-4.280 # -0.02"
					document.getElementById('pin3').value = "395.76 #	-4.260 # -0.02"
					break;
				case 12:
					document.getElementById('pin1').value = "190.72 #	8.6300 # 0.88"
					document.getElementById('pin2').value = "197.70 #	8.2900 # 0.87"
					document.getElementById('pin3').value = "201.25 #	8.3000 # 0.88"
					break;
				case 13:
					document.getElementById('pin1').value = "386.94 #	-3.040 # -0.16"
					document.getElementById('pin2').value = "386.63 #	-3.240 # -0.16"
					document.getElementById('pin3').value = "393.48 #	-3.120 # -0.16"
					break;
				case 16:
					document.getElementById('pin1').value = "164.63 #	-3.580 # 0.53"
					document.getElementById('pin2').value = "168.94 #	-3.610 # 0.59"
					document.getElementById('pin3').value = "178.25 #	-3.530 # 0.57"
					break;
				case 18:
					document.getElementById('pin1').value = "357.19 #	-22.22 # 0.50"
					document.getElementById('pin2').value = "366.18 #	-22.32 # 0.52"
					document.getElementById('pin3').value = "388.60 # -22.63 # 0.50"
					break;
				default:
					document.getElementById('pin1').value = "No Data";
					document.getElementById('pin2').value = "No Data";
					document.getElementById('pin3').value = "No Data";
			}
			break;
		case 15: // Ice Inferno
			switch (hole) {
				case 1:
					document.getElementById('pin1').value = "359.46 #	-1.530 # 0.00"
					document.getElementById('pin2').value = "370.80 #	-1.010 # 0.00"
					document.getElementById('pin3').value = "373.90 #	-1.200 # 0.00"
					break;
				case 2:
					document.getElementById('pin1').value = "260.81 #	-10.60 # 0.00"
					document.getElementById('pin2').value = "263.25 #	-10.90 # 0.01"
					document.getElementById('pin3').value = "272.75 #	-10.90 # 0.00"
					break;
				case 6:
					document.getElementById('pin1').value = "237.20 #	-4.890 # 0.00"
					document.getElementById('pin2').value = "237.95 #	-4.810 # 0.00"
					document.getElementById('pin3').value = "241.04 #	-4.830 # 0.00"
					break;
				case 8:
					document.getElementById('pin1').value = "326.90 #	2.7600 # 0.00"
					document.getElementById('pin2').value = "334.80 #	3.0400 # 0.00"
					document.getElementById('pin3').value = "339.60 #	2.9700 # 0.00"
					break;
				case 12:
					document.getElementById('pin1').value = "273.00 #	-2.580 # 0.02"
					document.getElementById('pin2').value = "279.61 #	-2.480 # 0.02"
					document.getElementById('pin3').value = "288.78 #	-2.410 # 0.02"
					break;
				case 15:
					document.getElementById('pin1').value = "428.54 #	-13.80 # -0.02"
					document.getElementById('pin2').value = "441.82 #	-13.80 # -0.02"
					document.getElementById('pin3').value = "441.82 #	-13.80 # -0.02"
					break;
				case 16:
					document.getElementById('pin1').value = "259.69 #	-6.710 # 0.00"
					document.getElementById('pin2').value = "270.81 #	-6.520 # 0.00"
					document.getElementById('pin3').value = "275.42 #	-6.760 # 0.00"
					break;
				case 18:
					document.getElementById('pin1').value = "404.03 #	-2.860 # -0.24"
					document.getElementById('pin2').value = "417.60 #	-2.870 # -0.25"
					document.getElementById('pin3').value = "418.14 #	-2.850 # -0.24"
					break;
				default:
					document.getElementById('pin1').value = "No Data";
					document.getElementById('pin2').value = "No Data";
					document.getElementById('pin3').value = "No Data";
			}
			break;
		case 16: // Silvia Cannon
			switch (hole) {
				case 2:
					document.getElementById('pin1').value = "229.48 #	-7.920 # 0.00"
					document.getElementById('pin2').value = "241.36 #	-7.980 # 0.00"
					document.getElementById('pin3').value = "242.60 #	-8.200 # 0.00"
					break;
				case 4:
					document.getElementById('pin1').value = "376.76 #	-27.10 # 0.00"
					document.getElementById('pin2').value = "389.89 #	-27.10 # 0.00"
					document.getElementById('pin3').value = "394.80 #	-27.10 # 0.00"
					break;
				case 8:
					document.getElementById('pin1').value = "304.90 #	-21.60 # 0.00"
					document.getElementById('pin2').value = "314.90 #	-21.60 # 0.00"
					document.getElementById('pin3').value = "334.50 #	-21.60 # 0.00"
					break;
				case 9:
					document.getElementById('pin1').value = "221.36 #	-1.120 # 0.00"
					document.getElementById('pin2').value = "234.45 #	-1.160 # 0.00"
					document.getElementById('pin3').value = "234.83 #	-1.290 # 0.00"
					break;
				case 11:
					document.getElementById('pin1').value = "262.80 #	-11.60 # 0.00"
					document.getElementById('pin2').value = "273.16 #	-11.50 # 0.00"
					document.getElementById('pin3').value = "290.40 #	-11.60 # 0.00"
					break;
				case 12:
					document.getElementById('pin1').value = "167.68 #	-4.040 # 0.00"
					document.getElementById('pin2').value = "168.78 #	-4.010 # 0.00"
					document.getElementById('pin3').value = "179.46 #	-4.000 # 0.00"
					break;
				case 16:
					document.getElementById('pin1').value = "208.68 #	-18.00 # 0.00"
					document.getElementById('pin2').value = "209.04 #	-18.00 # 0.00"
					document.getElementById('pin3').value = "222.53 #	-18.00 # 0.00"
					break;
				default:
					document.getElementById('pin1').value = "No Data";
					document.getElementById('pin2').value = "No Data";
					document.getElementById('pin3').value = "No Data";
			}
			break;
		case 17: // Wiz Wiz
			switch (hole) {
				case 3:
					document.getElementById('pin1').value = "220.92 #	-8.670 # 0.00"
					document.getElementById('pin2').value = "238.44 #	-8.740 # 0.00"
					document.getElementById('pin3').value = "243.35 #	-8.610 # 0.00"
					break;
				case 4:
					document.getElementById('pin1').value = "222.43 #	-0.450 # 0.00"
					document.getElementById('pin2').value = "236.68 #	-0.320 # 0.00"
					document.getElementById('pin3').value = "244.43 #	-0.510 # 0.00"
					break;
				case 7:
					document.getElementById('pin1').value = "404.63 #	-6.670 # 0.00"
					document.getElementById('pin2').value = "414.62 #	-6.360 # 0.00"
					document.getElementById('pin3').value = "423.60 #	-6.360 # 0.00"
					break;
				case 8:
					document.getElementById('pin1').value = "396.11 #	-6.930 # 0.00"
					document.getElementById('pin2').value = "407.27 #	-7.100 # 0.00"
					document.getElementById('pin3').value = "414.49 #	-7.270 # 0.00"
					break;
				case 9:
					document.getElementById('pin1').value = "216.28 #	-1.500 # 0.00"
					document.getElementById('pin2').value = "224.70 #	-1.240 # 0.00"
					document.getElementById('pin3').value = "239.43 #	-1.170 # 0.00"
					break;
				case 13:
					document.getElementById('pin1').value = "213.13 #	-6.120 # 0.00"
					document.getElementById('pin2').value = "220.47 #	-6.200 # 0.00"
					document.getElementById('pin3').value = "225.33 #	-6.420 # 0.00"
					break;
				case 15:
					document.getElementById('pin1').value = "385.40 #	-11.20 # 0.00"
					document.getElementById('pin2').value = "389.08 #	-11.30 # 0.00"
					document.getElementById('pin3').value = "399.73 #	-11.60 # 0.00"
					break;
				case 16:
					document.getElementById('pin1').value = "211.50 #	-5.830 # 0.00"
					document.getElementById('pin2').value = "221.09 #	-5.350 # 0.00"
					document.getElementById('pin3').value = "229.00 #	-4.960 # 0.00"
					break;
				case 17:
					document.getElementById('pin1').value = "257.65 #	-6.770 # 0.00"
					document.getElementById('pin2').value = "260.73 #	-6.900 # 0.00"
					document.getElementById('pin3').value = "272.48 #	-7.040 # 0.00"
					break;
				case 18:
					document.getElementById('pin1').value = "389.84 #	-9.010 # 0.00"
					document.getElementById('pin2').value = "405.86 #	-9.140 # 0.00"
					document.getElementById('pin3').value = "406.37 #	-8.830 # 0.00"
					break;
				default:
					document.getElementById('pin1').value = "No Data";
					document.getElementById('pin2').value = "No Data";
					document.getElementById('pin3').value = "No Data";
			}
			break;
		case 18: // Deep inferno
			switch (hole) {
				case 1:
					document.getElementById('pin1').value = "359.46 #	-1.650 # 0.00"
					document.getElementById('pin2').value = "370.80 #	-1.390 # 0.00"
					document.getElementById('pin3').value = "373.90 #	-1.530 # 0.00"
					break;
				case 2:
					document.getElementById('pin1').value = "260.81 #	-11.30 # 0.00"
					document.getElementById('pin2').value = "263.23 #	-11.50 # 0.01"
					document.getElementById('pin3').value = "272.75 #	-11.40 # 0.00"
					break;
				case 6:
					document.getElementById('pin1').value = "237.20 #	-4.710 # 0.00"
					document.getElementById('pin2').value = "237.95 #	-4.680 # 0.00"
					document.getElementById('pin3').value = "241.04 #	-4.600 # 0.00"
					break;
				case 8:
					document.getElementById('pin1').value = "326.90 #	2.1500 # 0.00"
					document.getElementById('pin2').value = "334.80 #	2.3700 # 0.00"
					document.getElementById('pin3').value = "339.60 #	2.4000 # 0.00"
					break;
				case 12:
					document.getElementById('pin1').value = "273.01 #	-2.980 # 0.02"
					document.getElementById('pin2').value = "279.61 #	-2.860 # 0.01"
					document.getElementById('pin3').value = "288.78 #	-2.630 # 0.02"
					break;
				case 16:
					document.getElementById('pin1').value = "259.69 #	-7.340 # 0.00"
					document.getElementById('pin2').value = "270.81 #	-6.710 # 0.00"
					document.getElementById('pin3').value = "275.42 #	-6.790 # 0.00"
					break;
				case 18:
					document.getElementById('pin1').value = "404.03 #	-3.210 # -0.24"
					document.getElementById('pin2').value = "417.60 #	-2.800 # -0.25"
					document.getElementById('pin3').value = "418.14 #	-3.240 # -0.24"
					break;
				default:
					document.getElementById('pin1').value = "No Data";
					document.getElementById('pin2').value = "No Data";
					document.getElementById('pin3').value = "No Data";
			}
			break;
		case 19: // Wind Hill
			switch (hole) {
				case 2:
					document.getElementById('pin1').value = "303.07 #	-7.670 # 0.00"
					document.getElementById('pin2').value = "311.76 #	-8.280 # 0.00"
					document.getElementById('pin3').value = "319.69 #	-7.680 # 0.00"
					break;
				case 7:
					document.getElementById('pin1').value = "244.47 #	-15.50 # 0.00"
					document.getElementById('pin2').value = "256.13 #	-15.10 # 0.00"
					document.getElementById('pin3').value = "257.88 #	-14.90 # 0.00"
					break;
				case 10:
					document.getElementById('pin1').value = "391.94 #	5.6200 # 0.00"
					document.getElementById('pin2').value = "422.10 #	5.1200 # 0.00"
					document.getElementById('pin3').value = "422.44 #	5.0400 # 0.00"
					break;
				case 13:
					document.getElementById('pin1').value = "239.51 #	-14.80 # 0.00"
					document.getElementById('pin2').value = "240.73 #	-14.50 # 0.00"
					document.getElementById('pin3').value = "251.37 #	-14.80 # 0.00"
					break;
				case 14:
					document.getElementById('pin1').value = "349.57 #	-18.20 # 0.00"
					document.getElementById('pin2').value = "396.63 #	-18.30 # 0.00"
					document.getElementById('pin3').value = "401.93 #	-18.20 # 0.00"
					break;
				case 16:
					document.getElementById('pin1').value = "252.77 #	-6.440 # 0.00"
					document.getElementById('pin2').value = "264.37 #	-6.460 # 0.00"
					document.getElementById('pin3').value = "269.97 #	-6.390 # 0.00"
					break;
				default:
					document.getElementById('pin1').value = "No Data";
					document.getElementById('pin2').value = "No Data";
					document.getElementById('pin3').value = "No Data";
			}
			break;
	}
	
}

