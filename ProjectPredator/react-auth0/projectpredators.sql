use predators;
Drop table predators;

CREATE TABLE predators(
    ID         			INT PRIMARY KEY AUTO_INCREMENT,
    f_name				VARCHAR(200) NOT NULL,
    l_name				VARCHAR(200) NOT NULL,
    job_title   		VARCHAR(100) NOT NULL,
    salary      		INT,
    finished_projects	INT,	 
    date_in 			DATE,
    visibility			BOOLEAN DEFAULT FALSE
    
);


select * from predators;
