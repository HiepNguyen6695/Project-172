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
    
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

ALTER TABLE `predators`
  ADD PRIMARY KEY (`id`);
ALTER TABLE `predators`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=1;


select * from predators;
