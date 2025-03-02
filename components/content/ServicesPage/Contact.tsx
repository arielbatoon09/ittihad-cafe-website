import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ButtonV2 } from "@/components/magicui/interactive-hover-button";

export default function Contact() {
  return (
    <section className="flex flex-col w-full bg-black text-white py-16 max-w-screen-xl mx-auto px-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative space-y-6">
          <div className="flex items-center mb-2">
            <h2 className="text-2xl font-medium">Get in Touch</h2>
          </div>
          <p className="text-sm text-zinc-400 mb-6">
            Ready to dive into high-speed gaming and live streaming? Fill out{" "}
            <br /> the form below, and our team will get back to you with
            details on
            <br /> memberships, pricing, and special perks!
          </p>
          <div className="w-full h-[400px] rounded-md overflow-hidden border border-zinc-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15702.006037352932!2d123.9415511!3d10.301689699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1740840123423!5m2!1sen!2sph"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <ButtonV2 variant="secondary">
            Get Direction
          </ButtonV2>
        </div>

        {/* Form Section */}
        <div className="border border-zinc-800 rounded-lg flex items-center justify-center p-6">
          <div className="space-y-3 w-full">
            <div className="grid grid-cols-2 gap-4 ">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-white text-xs">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  placeholder="Enter First Name"
                  className="bg-zinc-900 border-zinc-800 rounded-sm"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-white text-xs">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  placeholder="Enter Last Name"
                  className="bg-zinc-900 border-zinc-800 rounded-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white text-xs">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your Email"
                  className="bg-zinc-900 border-zinc-800 rounded-sm"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white text-xs">
                  Phone
                </Label>
                <Input
                  id="phone"
                  placeholder="Enter Phone Number"
                  className="bg-zinc-900 border-zinc-800 rounded-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="service" className="text-white text-xs">
                Select Service
              </Label>
              <Select>
                <SelectTrigger className="bg-zinc-900 border-zinc-800 rounded-sm text-white">
                  <SelectValue placeholder="Placeholder" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="service1">Service 1</SelectItem>
                  <SelectItem value="service2">Service 2</SelectItem>
                  <SelectItem value="service3">Service 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-white text-xs">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Enter your Message here..."
                className="bg-zinc-900 border-zinc-800 rounded-sm h-24"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Checkbox id="terms" className="border-zinc-700 rounded-sm" />
                <Label htmlFor="terms" className="text-xs text-zinc-400">
                  I agree with Terms of Use and Privacy Policy
                </Label>
              </div>

              <ButtonV2>
                Send Your Message
              </ButtonV2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
