"use client";

import ActionCard from "@/components/ActionCard";
import { QUICK_ACTIONS } from "@/constants";
import { useUserRole } from "@/hooks/useUserRole";
import { useQuery } from "convex/react";
import { useState } from "react";
import { api } from "../../../../convex/_generated/api";
import { useRouter } from "next/navigation";
import MeetingModal from "@/components/MeetingModal";
import LoaderUI from "@/components/LoaderUI";
import { Loader2Icon } from "lucide-react";
import MeetingCard from "@/components/MeetingCard";

export default function Home() {
  const router = useRouter();
  const { isInterviewer, isCandidate, isLoading } = useUserRole();
  const interviews = useQuery(api.interviews.getMyInterviews);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"start" | "join">();

  const handleQuickAction = (title: string) => {
    switch (title) {
      case "New Call":
        setModalType("start");
        setShowModal(true);
        break;
      case "Join Interview":
        setModalType("join");
        setShowModal(true);
        break;
      default:
        router.push(`/${title.toLowerCase()}`);
    }
  };

  if (isLoading) return <LoaderUI />;

  return (
    <div className="container-m max-w-7xl mx-auto py-6 space-y-10">
      {/* Welcome Section */}
      <section className="rounded-2xl bg-card p-8 border shadow-sm">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
          Welcome back!
        </h1>
        <p className="text-muted-foreground mt-2 max-w-xl leading-relaxed">
          {isInterviewer
            ? "Easily manage your interviews, track progress, and engage with candidates through streamlined workflows."
            : "Keep track of your upcoming interviews, join sessions seamlessly, and review your progress at a glance."}
        </p>
      </section>

      {/* Interviewer View */}
      {isInterviewer && (
        <>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Quick Actions</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {QUICK_ACTIONS.map((action) => (
                <ActionCard
                  key={action.title}
                  action={action}
                  onClick={() => handleQuickAction(action.title)}
                />
              ))}
            </div>
          </section>

          <MeetingModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            title={modalType === "join" ? "Join Meeting" : "Start Meeting"}
            isJoinMeeting={modalType === "join"}
          />
        </>
      )}

      {/* Candidate View */}
      {isCandidate && (
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Your Interviews</h2>
            <p className="text-muted-foreground mt-1">View and join your scheduled interviews with ease.</p>
          </div>

          <div>
            {interviews === undefined ? (
              <div className="flex justify-center py-12">
                <Loader2Icon className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : interviews.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {interviews.map((interview) => (
                  <MeetingCard key={interview._id} interview={interview} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                You have no scheduled interviews at the moment.
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
