# Analog-Clock


Rotating HOURS hand in clock Calculation
    Hours: 
    12 hr--> 360 deg of rotation
    1 hr--> (360/12) deg = 30 deg of rotation
    So, for h hrs--> 30*h deg of rotation

    Minutes: (1hr = 60 min)
    60 min--> 30 deg of rotation
    1 min--> (30/60) deg= 1/2 deg of rotation
    So, for m mins--> m/2 deg of rotation


    Seconds: (1 min = 60 sec)
    60 sec--> 1/2 deg of rotation
    1 sec--> ((1/2)/60) deg= 1/120 deg of rotation
    So, for s sec--> s/120 deg of rotation
    But s/120 is so small value, that it can be neglected

    SO FINALLY NOW, 
    for rotating HOURS hand of clock-
            for h hours- (30h + m/2 + s/120) deg ------------------- 1



Rotating MINUTES hand in clock Calculation
    Minutes: 
    60 min--> 360 deg 
    1 min--> 6 deg
    So, for m mins--> 6*m deg

    Seconds: (1min = 60sec)
    60 sec--> 6 deg
    1sec --> 1/10 deg
    s sec--> s/10 deg

    But s/10 deg for Seconds hand is so small value, that it can be neglected

    SO FINALLY NOW, 
    for rotating MINUTES hand of clock-
            for m mins-->  (6*m + s/10 ) deg ----------------------- 2



Rotating SECONDS hand in clock Calculation
    60 sec--> 360 deg
    1 sec--> 6 deg
    So, for s sec--> 6*s deg 

    SO FINALLY NOW, 
    for rotating SECONDS hand of clock-
            for s secs-->  6*s deg --------------------------------- 3
