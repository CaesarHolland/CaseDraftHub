# Case Draft Hub

> This is a little tool for the doctors.
>
> After a day's work ,  the doctor may need to sort the case from paper to computer and it's a lot of job.
> You might wonder why they don't enter information directly into the case system when they ask for patient information.
> Because in most hospitals, there is no corresponding information in the system before the patient is registered, so the case cannot be created at this time. And the doctors usually write it down to a paper for temporary , for sort at night.
>
> Usually not fast enough in this way, need electronic. So I made it.


### Brief
- YAML文件存储病例草稿
- 所有病人草稿存储在一个YAML文件里面
- YAML文件只负责存储信息不负责展示信息，展示信息交给HTML页面
- 一个病人一个YAML文件，所有YAML文件在同一个文件夹里，名为【CaseDraft】
- 打开程序时，所有病例草稿将一起并分页展示

