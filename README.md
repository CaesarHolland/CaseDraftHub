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
- 所有病例草稿存储在data路径下，子路径为/unfinished/与/finished/
- 支持自定义默认病例草稿模板
- 支持自定义主题配色

![image](https://user-images.githubusercontent.com/51748713/153998071-30cc5195-ef1a-4247-b551-9125abc05dd4.png)

### Previous
```bash
electron v17.0.0 && npm v16.3 && electron-forge

npm install

npm install --save-dev bower

bower install bootstrap

```

### Package Application
```bash
npm run make
