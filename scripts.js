//Ignore this next part please :)
//Just move along, nothing to see here
//Keep moving
//I'll look into doing this better at a later point, trust me bro.

jsonData = JSON.parse('{"main_weps":{"ar":["AK74","M4A1","AK15","SCAR-H","AUG A3","SG550","FAMAS","ACR","G36C","HK419","FAL","AK5C"],"smg":["MP7","UMP-45","PP2000","PP19","Kriss Vector","MP5"],"pdw":["Honey Badger","Groza","P90"],"carbine":["AS Val","ScorpionEVO"],"lsg":["L86A1","MG36"],"lmg":["M249","Ultimax100"],"dmr":["MK20","M110","MK14 EBR","SVD"],"sniper":["SSG 69","SV-98","L96","Rem700","M200","MSR"]},"secondary_weps":["M9","MP 443","USP","Glock 18","Unica","Desert Eagle","RSH12"],"scopes_id":["iron","short","medium","long","short","medium","long"],"scopes_main":{"iron":"None","short":["Aim Comp","Holographic","Kobra","D K P7","P K- A S","Red Dot","Reflex","Strikefire","Razor","F You","Holo P K-120","H S401 G5"],"medium":["1 P78","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332"],"long":["6x Scope","8x Scope","15x Scope","20x Scope","P T R-40 Hunter"]},"scopes_canted":["None","Ironsights","Red Dot","F You","Holo Dot"],"scopes_top":["None","Delta Sight","Red Dot","C Red Dot","F You"],"scopes_secondary":["None","Pistol Red Dot","Pistol Delta","Pistol 8x"],"barrels":["None","Basic","Compensator","Heavy","Long","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Ranger","Osprey 9"],"grips":["None","Bipod","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical"],"side_rails":["None","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight"],"magazines":["None","Short-A","Quick-A","Extended-A","Drum-A","Extended-B","Quick-B"],"bolts":["None","Bolt Action A","Bolt Action B","Bolt Action C","Bolt Action D","Bolt Action E"]}');
validData = JSON.parse('{"AK74":["None","Short-A","Quick-A","Extended-A","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Basic","Compensator","Heavy","Long","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Ironsights","Red Dot","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Aim Comp","Holographic","Kobra","D K P7","P K- A S","Red Dot","Reflex","Strikefire","Razor","F You","Holo P K-120","H S401 G5","1 P78","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332"],"M4A1":["None","Quick-A","Extended-A","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Basic","Compensator","Heavy","Long","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Ironsights","Red Dot","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Aim Comp","Holographic","Kobra","P K- A S","Red Dot","Reflex","Strikefire","Razor","F You","Holo P K-120","H S401 G5","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332"],"AK15":["None","Quick-A","Extended-A","Extended-B","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Basic","Compensator","Heavy","Long","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Ironsights","Red Dot","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Aim Comp","Holographic","Kobra","D K P7","P K- A S","Red Dot","Reflex","Strikefire","Razor","F You","Holo P K-120","H S401 G5","1 P78","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332"],"SCAR-H":["None","Quick-A","Extended-A","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Basic","Compensator","Heavy","Long","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Ironsights","Red Dot","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Aim Comp","Holographic","Kobra","P K- A S","Red Dot","Reflex","Strikefire","Razor","F You","Holo P K-120","H S401 G5","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332"],"AUG A3":["None","Quick-A","Extended-A","Extended-B","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Basic","Compensator","Heavy","Long","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Ironsights","Red Dot","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Aim Comp","Holographic","Kobra","P K- A S","Red Dot","Reflex","Strikefire","Razor","F You","Holo P K-120","H S401 G5","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332"],"SG550":["None","Quick-A","Extended-A","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Basic","Compensator","Heavy","Long","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Ironsights","Red Dot","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Aim Comp","Holographic","Kobra","P K- A S","Red Dot","Reflex","Strikefire","Razor","F You","Holo P K-120","H S401 G5","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332"],"FAMAS":["None","Quick-A","Extended-A","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Basic","Compensator","Heavy","Long","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Ironsights","Red Dot","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Aim Comp","Holographic","Kobra","P K- A S","Red Dot","Reflex","Strikefire","Razor","F You","Holo P K-120","H S401 G5","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332"],"ACR":["None","Quick-A","Quick-B","Extended-A","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Basic","Compensator","Heavy","Long","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Ironsights","Red Dot","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Aim Comp","Holographic","Kobra","P K- A S","Red Dot","Reflex","Strikefire","Razor","F You","Holo P K-120","H S401 G5","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332"],"G36C":["None","Quick-A","Extended-A","Drum-A","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Basic","Compensator","Heavy","Long","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Ironsights","Red Dot","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Aim Comp","Holographic","Kobra","P K- A S","Red Dot","Reflex","Strikefire","Razor","F You","Holo P K-120","H S401 G5","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332"],"HK419":["None","Quick-A","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Basic","Compensator","Heavy","Long","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Ironsights","Red Dot","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Aim Comp","Holographic","Kobra","P K- A S","Red Dot","Reflex","Strikefire","Razor","F You","Holo P K-120","H S401 G5","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332"],"FAL":["None","Quick-A","Short-A","Extended-A","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Basic","Compensator","Heavy","Long","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Ironsights","Red Dot","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Aim Comp","Holographic","Kobra","P K- A S","Red Dot","Reflex","Strikefire","Razor","F You","Holo P K-120","H S401 G5","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332"],"AK5C":["None","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Basic","Compensator","Heavy","Long","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Ironsights","Red Dot","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Aim Comp","Holographic","Kobra","P K- A S","Red Dot","Reflex","Strikefire","Razor","F You","Holo P K-120","H S401 G5","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332"],"MK20":["None","Short-A","Quick-A","Extended-A","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Bipod","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Basic","Compensator","Heavy","Long","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Ironsights","Red Dot","F You","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Holographic","Kobra","Red Dot","Reflex","Razor","Holo P K-120","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332","6x Scope"],"M110":["None","Short-A","Extended-A","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Bipod","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Basic","Compensator","Heavy","Long","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Ironsights","Red Dot","F You","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Holographic","Kobra","Red Dot","Reflex","Razor","Holo P K-120","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332","6x Scope"],"MK14 EBR":["None","Quick-A","Extended-A","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Bipod","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Basic","Compensator","Heavy","Long","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Ironsights","Red Dot","F You","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Holographic","Kobra","Red Dot","Reflex","Razor","Holo P K-120","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332","6x Scope"],"SVD":["None","1 P78","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Bipod","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Basic","Compensator","Heavy","Long","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Ironsights","Red Dot","F You","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Holographic","Kobra","Red Dot","Reflex","Razor","Holo P K-120","D K P7","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332","6x Scope"],"Honey Badger":["None","Quick-A","Extended-A","Delta Sight","Red Dot","C Red Dot","F You","Ironsights","Red Dot","F You","Holo Dot","Aim Comp","Holographic","Kobra","D K P7","P K- A S","Red Dot","Reflex","Strikefire","Razor","F You","Holo P K-120","H S401 G5","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight"],"Groza":["None","Ironsights","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Basic","Compensator","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Aim Comp","Holographic","Kobra","D K P7","P K- A S","Red Dot","Reflex","Strikefire","Razor","F You","Holo P K-120","H S401 G5","1 P78","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332"],"P90":["None","Ironsights","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Basic","Compensator","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Aim Comp","Holographic","Kobra","P K- A S","Red Dot","Reflex","Strikefire","Razor","F You","Holo P K-120","H S401 G5","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332","Quick-A"],"AS Val":["None","Ironsights","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Aim Comp","Holographic","Kobra","D K P7","P K- A S","Red Dot","Reflex","Strikefire","Razor","F You","Holo P K-120","H S401 G5","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332","Quick-A","Extended-A","1 P78","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical"],"MP7":["None","Ironsights","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Aim Comp","Holographic","Kobra","P K- A S","Red Dot","Reflex","Strikefire","Razor","F You","Holo P K-120","H S401 G5","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Basic","Compensator","Heavy","Long","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Quick-A"],"UMP-45":["None","Ironsights","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Aim Comp","Holographic","Kobra","P K- A S","Red Dot","Reflex","Strikefire","Razor","F You","Holo P K-120","H S401 G5","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Basic","Compensator","Heavy","Long","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Quick-A"],"PP2000":["None","Ironsights","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Aim Comp","Holographic","Kobra","D K P7","P K- A S","Red Dot","Reflex","Strikefire","Razor","F You","Holo P K-120","H S401 G5","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332","Basic","Compensator","Heavy","Long","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Extended-A","1 P78"],"PP19":["None","Ironsights","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Aim Comp","Holographic","Kobra","D K P7","P K- A S","Red Dot","Reflex","Strikefire","Razor","F You","Holo P K-120","H S401 G5","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Basic","Compensator","Heavy","Long","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Quick-A","1 P78"],"Kriss Vector":["None","Ironsights","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Aim Comp","Holographic","Kobra","P K- A S","Red Dot","Reflex","Strikefire","Razor","F You","Holo P K-120","H S401 G5","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Basic","Compensator","Heavy","Long","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Quick-A","Drum-A","Osprey 9"],"MP5":["None","Ironsights","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Aim Comp","Holographic","Kobra","P K- A S","Red Dot","Reflex","Strikefire","Razor","F You","Holo P K-120","H S401 G5","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Basic","Compensator","Heavy","Long","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Quick-A","Short-A"],"ScorpionEVO":["None","Ironsights","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Aim Comp","Holographic","Kobra","P K- A S","Red Dot","Reflex","Strikefire","Razor","F You","Holo P K-120","H S401 G5","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical"],"L86A1":["None","Ironsights","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Aim Comp","Holographic","Kobra","P K- A S","Red Dot","Reflex","Strikefire","Razor","F You","Holo P K-120","H S401 G5","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Basic","Compensator","Heavy","Long","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Quick-A","Drum-A"],"MG36":["None","Ironsights","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Aim Comp","Holographic","Kobra","P K- A S","Red Dot","Reflex","Strikefire","Razor","F You","Holo P K-120","H S401 G5","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Basic","Compensator","Heavy","Long","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Drum-A"],"M249":["None","Ironsights","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Aim Comp","Holographic","Kobra","P K- A S","Red Dot","Reflex","Strikefire","Razor","F You","Holo P K-120","H S401 G5","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Basic","Compensator","Heavy","Long","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Bipod"],"Ultimax100":["None","Ironsights","Holo Dot","Delta Sight","Red Dot","C Red Dot","F You","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Aim Comp","Holographic","Kobra","P K- A S","Red Dot","Reflex","Strikefire","Razor","F You","Holo P K-120","H S401 G5","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Basic","Compensator","Heavy","Long","Muzzle Break","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Bipod"],"SSG 69":["None","Bolt Action A","Bolt Action B","Bolt Action C","Bolt Action D","Bolt Action E","Delta Sight","Red Dot","C Red Dot","F You","Ironsights","Red Dot","F You","Holo Dot","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Bipod","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332","6x Scope","8x Scope","15x Scope","20x Scope","P T R-40 Hunter","Basic","Compensator","Heavy","Long","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Ranger","Extended-A"],"SV-98":["None","Bolt Action A","Bolt Action B","Bolt Action C","Bolt Action D","Bolt Action E","Delta Sight","Red Dot","C Red Dot","F You","Ironsights","Red Dot","F You","Holo Dot","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Bipod","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332","6x Scope","8x Scope","15x Scope","20x Scope","P T R-40 Hunter","Basic","Compensator","Heavy","Long","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Ranger","P K- A S","1P78"],"L96":["None","Bolt Action A","Bolt Action B","Bolt Action C","Bolt Action D","Bolt Action E","Delta Sight","Red Dot","C Red Dot","F You","Ironsights","Red Dot","F You","Holo Dot","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Bipod","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332","6x Scope","8x Scope","15x Scope","20x Scope","P T R-40 Hunter","Basic","Compensator","Heavy","Long","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Ranger","Extended-A","Short-A"],"Rem700":["None","Bolt Action A","Bolt Action B","Bolt Action C","Bolt Action D","Bolt Action E","Delta Sight","Red Dot","C Red Dot","F You","Ironsights","Red Dot","F You","Holo Dot","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Bipod","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332","6x Scope","8x Scope","15x Scope","20x Scope","P T R-40 Hunter","Basic","Compensator","Heavy","Long","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Ranger","Extended-A"],"M200":["None","Bolt Action A","Bolt Action B","Bolt Action C","Bolt Action D","Bolt Action E","Delta Sight","Red Dot","C Red Dot","F You","Ironsights","Red Dot","F You","Holo Dot","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Bipod","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332","6x Scope","8x Scope","15x Scope","20x Scope","P T R-40 Hunter","Basic","Compensator","Heavy","Long","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Ranger","Short-A"],"MSR":["None","Bolt Action A","Bolt Action B","Bolt Action C","Bolt Action D","Bolt Action E","Delta Sight","Red Dot","C Red Dot","F You","Ironsights","Red Dot","F You","Holo Dot","Flashlight","Rangefinder","Redlaser","Tactical Flashlight","Greenlaser","Searchlight","Bipod","Angled","Vertical","Stubby","Stabil","Vertical Skeleton","F A B-D T F G","Magpul Angled"," B C M- Gun Fighter","Shift Short Angled","S E-5","R K-6","Hera C Q R Front","B-25 U R K","V T A C U V G Tactical","Acog","M 125","Prisma","Slip","Flir","Echo","T R I4 X32","Burris A R332","6x Scope","8x Scope","15x Scope","20x Scope","P T R-40 Hunter","Basic","Compensator","Heavy","Long","Tactical","Flash Hider","D G N-308","V A M B-762","S O N-6 762","N T-4 556","Suppressor Long","Suppressor Short","Ranger","Extended-A"],"M9":["None","Flashlight","Redlaser","Tactical Flashlight","Greenlaser","Pistol Red Dot","Pistol Delta","Compensator","Tactical","Flash Hider","D G N-308","Suppressor Long","Suppressor Short","Osprey 9"],"MP 443":["None","Flashlight","Redlaser","Tactical Flashlight","Greenlaser","Pistol Red Dot","Pistol Delta","Compensator","Tactical","Flash Hider","D G N-308","Suppressor Long","Suppressor Short","Osprey 9"],"USP":["None","Flashlight","Redlaser","Tactical Flashlight","Greenlaser","Pistol Red Dot","Pistol Delta","Compensator","Tactical","Flash Hider","D G N-308","Suppressor Long","Suppressor Short","Osprey 9"],"Glock 18":["None","Flashlight","Redlaser","Tactical Flashlight","Greenlaser","Pistol Red Dot","Pistol Delta","Compensator","Tactical","Flash Hider","D G N-308","Suppressor Long","Suppressor Short","Osprey 9","Extended-A"],"Unica":["None","Flashlight","Redlaser","Tactical Flashlight","Greenlaser","Pistol Red Dot","Pistol Delta","Suppressor Long","Pistol 8x"],"Desert Eagle":["None","Flashlight","Redlaser","Tactical Flashlight","Greenlaser","Pistol Red Dot","Pistol Delta","Suppressor Long","Suppressor Short","D G N-308","Flash Hider","Tactical","Compensator"],"RSH12":["None","Flashlight","Redlaser","Tactical Flashlight","Greenlaser","Pistol Red Dot","Pistol Delta","Suppressor Long","Pistol 8x"]}');


function getRandomLoadout(){
    document.getElementById("getRandomButt").disabled = true;
    document.getElementById("mainWepHolder").hidden = false;
    document.getElementById("secWepHolder").hidden = false;
    document.getElementById("nothingImg").hidden = true;

    //Unhide
    var wepTable = document.getElementById("mainWepTable").children[0].children;
    for(var i = 0; i < wepTable.length; i++){
        if(wepTable[i].tagName == 'TR'){
            if(wepTable[i].hidden == true){
                wepTable[i].hidden = false;
            }
        }
    }
    wepTable = document.getElementById("secWepTable").children[0].children;
    for(var i = 0; i < wepTable.length; i++){
        if(wepTable[i].tagName == 'TR'){
            if(wepTable[i].hidden == true){
                wepTable[i].hidden = false;
            }
        }
    }

    //Get options and build weapon list
    var weaponList = [];

    if(document.getElementById("arCheck").checked){
        for(var i = 0; i < jsonData["main_weps"]["ar"].length; i++) {
            weaponList.push(jsonData["main_weps"]["ar"][i]);
        }
    }
    if(document.getElementById("smgCheck").checked){
        for(var i = 0; i < jsonData["main_weps"]["smg"].length; i++) {
            weaponList.push(jsonData["main_weps"]["smg"][i]);
        }
    }
    if(document.getElementById("pdwCheck").checked){
        for(var i = 0; i < jsonData["main_weps"]["pdw"].length; i++) {
            weaponList.push(jsonData["main_weps"]["pdw"][i]);
        }
    }
    if(document.getElementById("carbineCheck").checked){
        for(var i = 0; i < jsonData["main_weps"]["carbine"].length; i++) {
            weaponList.push(jsonData["main_weps"]["carbine"][i]);
        }
    }
    if(document.getElementById("lsgCheck").checked){
        for(var i = 0; i < jsonData["main_weps"]["lsg"].length; i++) {
            weaponList.push(jsonData["main_weps"]["lsg"][i]);
        }
    }
    if(document.getElementById("lmgCheck").checked){
        for(var i = 0; i < jsonData["main_weps"]["lmg"].length; i++) {
            weaponList.push(jsonData["main_weps"]["lmg"][i]);
        }
    }
    if(document.getElementById("dmrCheck").checked){
        for(var i = 0; i < jsonData["main_weps"]["dmr"].length; i++) {
            weaponList.push(jsonData["main_weps"]["dmr"][i]);
        }
    }
    if(document.getElementById("sniperCheck").checked){
        for(var i = 0; i < jsonData["main_weps"]["sniper"].length; i++) {
            weaponList.push(jsonData["main_weps"]["sniper"][i]);
        }
    }

    if(weaponList.length == 0){
        document.getElementById("mainWepHolder").hidden = true;
        document.getElementById("secWepHolder").hidden = true;
        document.getElementById("nothingImg").hidden = false;

        document.getElementById("getRandomButt").disabled = false;
        document.getElementById("rerollMainButt").disabled = true;
        document.getElementById("rerollSecButt").disabled = true;
        return;
    }

    //Get Random weapons
    //main_wep = jsonData["main_weps"][Math.floor(Math.random() * jsonData["main_weps"].length)];
    main_wep = weaponList[Math.floor(Math.random() * weaponList.length)];
    sec_wep = jsonData["secondary_weps"][Math.floor(Math.random() * jsonData["secondary_weps"].length)];

    var mainValid = validData[main_wep];
    var secValid = validData[sec_wep];
    var validator = true;

    //Get random scopes
    while(validator){
        var mainScopes = getMainScopes();
        for(var i = 0; i < mainScopes.length; i++){
            if(mainScopes[i] != null){
                if(mainValid.includes(mainScopes[i])){
                    validator = false;
                }else{
                    validator = true;
                    break;
                }
            }
        }
    }
    validator = true;

    while(validator){
        var secondaryScope = jsonData["scopes_secondary"][Math.floor(Math.random() * jsonData["scopes_secondary"].length)];
        if(secValid.includes(secondaryScope)){
            validator = false;
        }else{
            validator = true;
        }
    }
    validator = true;


    //Get random barrel
    while(validator){
        var mainBarrel = jsonData["barrels"][Math.floor(Math.random() * jsonData["barrels"].length)];
        if(mainValid.includes(mainBarrel)){
            validator = false;
        }else{
            validator = true;
        }
    }
    validator = true;

    while(validator){
        var secBarrel = jsonData["barrels"][Math.floor(Math.random() * jsonData["barrels"].length)];
        if(secValid.includes(secBarrel)){
            validator = false;
        }else{
            validator = true;
        }
    }
    validator = true;


    //Get random grip
    while(validator){
        var mainGrip = jsonData["grips"][Math.floor(Math.random() * jsonData["grips"].length)];
        if(mainValid.includes(mainGrip)){
            validator = false;
        }else{
            validator = true;
        }
    }
    validator = true;


    //Get random side rail
    while(validator){
        var mainSiderail = jsonData["side_rails"][Math.floor(Math.random() * jsonData["side_rails"].length)];
        if(mainValid.includes(mainSiderail)){
            validator = false;
        }else{
            validator = true;
        }
    }
    validator = true;

    while(validator){
        var secSiderail = jsonData["side_rails"][Math.floor(Math.random() * jsonData["side_rails"].length)];
        if(secValid.includes(secSiderail)){
            validator = false;
        }else{
            validator = true;
        }
    }
    validator = true;
    
    //Get random mag
    while(validator){
        var mainMag = jsonData["magazines"][Math.floor(Math.random() * jsonData["magazines"].length)];
        if(mainValid.includes(mainMag)){
            validator = false;
        }else{
            validator = true;
        }
    }
    validator = true;

    while(validator){
        var secMag = jsonData["magazines"][Math.floor(Math.random() * jsonData["magazines"].length)];
        if(secValid.includes(secMag)){
            validator = false;
        }else{
            validator = true;
        }
    }
    validator = true;

    //Get random bolt
    var mainBolt = null;

    if(main_wep == "SSG 69" || main_wep == "SV-98" || main_wep == "L96" || main_wep == "Rem700" || main_wep == "M200" || main_wep == "MSR"){
        while(validator){
            var mainBolt = jsonData["bolts"][Math.floor(Math.random() * jsonData["bolts"].length)];
            if(mainValid.includes(mainBolt)){
                validator = false;
            }else{
                validator = true;
            }
        }
        validator = true;
    }

    var cantedScope = null;
    var topScope = null;

    //Apply all to page
    if(mainScopes[1] != null && mainScopes[0] != "Ironsights"){
        cantedScope = mainScopes[1];
    }
    if(mainScopes[2] != null && ["1 P78", "Echo", "T R I4 X32", "Burris A R332"].includes(mainScopes[0]) == false){
        topScope = mainScopes[2];
    }

        //Weps
    document.getElementById('randomWepMain').innerHTML = main_wep;
    document.getElementById('randomWepSec').innerHTML = sec_wep;

        //Scopes
    document.getElementById('randomMainScopes').innerHTML = mainScopes[0];

    if(cantedScope != null){
        document.getElementById('randomMainCanted').innerHTML = cantedScope;
    }else{
        document.getElementById('randomMainCanted').innerHTML = "";
    }

    if(topScope != null){
        document.getElementById('randomMainTop').innerHTML = topScope;
    }else{
        document.getElementById('randomMainTop').innerHTML = "";
    }

    document.getElementById('randomSecScope').innerHTML = secondaryScope;

        //Barrel
    document.getElementById('randomMainBarrel').innerHTML = mainBarrel;
    document.getElementById('randomSecBarrel').innerHTML = secBarrel;

        //Grip
    document.getElementById('randomMainGrip').innerHTML = mainGrip;

        //Side Rails
    document.getElementById('randomMainSide').innerHTML = mainSiderail;
    document.getElementById('randomSecSide').innerHTML = secSiderail;

        //Mag
    document.getElementById('randomMainMag').innerHTML = mainMag;
    document.getElementById('randomSecMag').innerHTML = secMag;

        //Bolt
    if(mainBolt != null){
        document.getElementById('randomMainBolt').innerHTML = mainBolt;
    }else{
        document.getElementById('randomMainBolt').innerHTML = "";
    }

    //Set images
    main_wep = main_wep.replace(" ","").toLowerCase();
    document.getElementById('mainWepImg').src = "/imgs/" + main_wep + ".png" 

    sec_wep = sec_wep.replace(" ","").toLowerCase();
    document.getElementById('secWepImg').src = "/imgs/" + sec_wep + ".png" 

    //Hide rows when needed
    wepTable = document.getElementById("mainWepTable").children[0].children;
    for(var i = 0; i < wepTable.length; i++){
        if(wepTable[i].tagName == 'TR'){
            if(wepTable[i].children[1].innerHTML == "" || wepTable[i].children[1].innerHTML == "None"){
                wepTable[i].hidden = true;
            }
        }
    }

    wepTable = document.getElementById("secWepTable").children[0].children;
    for(var i = 0; i < wepTable.length; i++){
        if(wepTable[i].tagName == 'TR'){
            if(wepTable[i].children[1].innerHTML == "" || wepTable[i].children[1].innerHTML == "None"){
                wepTable[i].hidden = true;
            }
        }
    }

    document.getElementById("getRandomButt").disabled = false;
    document.getElementById("rerollMainButt").disabled = false;
    document.getElementById("rerollSecButt").disabled = false;
}

//Functions for randoms
function getMainScopes(){
    var randScopeId = jsonData["scopes_id"][Math.floor(Math.random() * jsonData["scopes_id"].length)];

    if(randScopeId == "iron"){
        return ["Ironsights", null, null];
    }else{
        var scope_main_list = jsonData["scopes_main"][randScopeId];
        
        var scope_main = scope_main_list[Math.floor(Math.random() * scope_main_list.length)];
        var scope_canted = jsonData["scopes_canted"][Math.floor(Math.random() * jsonData["scopes_canted"].length)];
        var scope_top = null;
        if(randScopeId == "medium" || randScopeId == "long"){
            scope_top = jsonData["scopes_top"][Math.floor(Math.random() * jsonData["scopes_top"].length)];
        }

        return [scope_main, scope_canted, scope_top]
    }
}

function rerollMain(){

}

function rerollSec(){

}