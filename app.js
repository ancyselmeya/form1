
 function check()
                    {
                       name = document.getElementById("name").value;
                       father = document.getElementById("father").value;
                        mobile = document.getElementById("mobile").value;
                     if(name=="")
                        {
                            alert("please fill the name");
                            return false;
                        }
                        else if(father=="")
                        {
                            alert("please fill the father");
                            return false;
                        }
                        else if(mobile=="")
                        {
                            alert("please fill the mobile");
                            return false;
                        }
                                      
                           }  
                      function hi()
                      {
                          document.getElementById("sos").innerHTML=success()
                      }     
                    
                                                                                                                 