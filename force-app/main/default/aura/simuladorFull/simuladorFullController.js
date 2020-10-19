({
    doInit: function(cmp)
    {
        const action = cmp.get("c.getUserName");
        action.setCallback(this, function(response){
            let state = response.getState();
            if (state === "SUCCESS") {
                cmp.set("v.username", response.getReturnValue());
             }
          });
           $A.enqueueAction(action);
    }    
})